const Review = require("../models/review");
const Campground = require("../models/campground");
const User = require("../models/user");

module.exports.postReview = async (req, res) => {
  const campground = await Campground.findById(req.params.id);
  const review = new Review(req.body.review);
  const today = new Date().toLocaleString();
  review.datePosted = today;
  review.author = req.user._id;
  campground.reviews.push(review);
  review.campground = campground;
  await review.save();
  await campground.save();
  await User.findByIdAndUpdate(review.author, {
    $inc: { num_of_reviews_posted: 1 },
  });
  req.flash("success", "Successfully created new review!");
  res.redirect(`/campgrounds/${campground._id}`);
};

module.exports.deleteReview = async (req, res) => {
  const { id, reviewId } = req.params;
  await Campground.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await Review.findByIdAndDelete(reviewId);
  req.flash("success", "Successfully deleted the review!");
  res.redirect(`/campgrounds/${id}`);
};

module.exports.renderEditReviewForm = async (req, res, next) => {
  const { id } = req.params;
  const review = await Review.findById(id);
  const campground = review.campground;
  res.render("reviews/edit", { campground, review });
};

module.exports.editReview = async (req, res, next) => {
  const { id } = req.params;
  const review = await Review.findByIdAndUpdate(id, { ...req.body.review });
  const campground_id = review.campground;
  await review.save();
  req.flash("success", "Successfully updated review!");
  res.redirect(`/campgrounds/${campground_id}`);
};
