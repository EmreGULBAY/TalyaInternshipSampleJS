import { bookingService } from "../services/bookingService.js";

export function bookingController(req, res) {
  const { roomId, name, price } = req.body;
  if (!name || !roomId || !price) {
    res.status(400).json({ success: false, error: "Missing required fields" });
    return;
  }

  if (
    typeof name !== "string" ||
    typeof roomId !== "string" ||
    typeof price !== "number"
  ) {
    res.status(400).json({ success: false, error: "Invalid field type" });
    return;
  }

  if (price < 0) {
    res
      .status(400)
      .json({ success: false, error: "Price must be a positive number" });
    return;
  }

  const booking = bookingService(name, roomId, price);

  if (!booking.success) {
    res
      .status(500)
      .json({
        success: false,
        error: "An error occurred while processing your request",
      });
    return;
  }

  res.json({ success: true, bookingId: booking.bookingId });
  return;
}
