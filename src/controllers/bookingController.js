import { bookingService } from "../services/bookingService.js";

export function bookingController(req, res) {
  const { roomId, amount, currency } = req.body;
  if (!roomId) {
    res.status(404).json({success: false, data:"Room ID is required"});
  return;
}
  if (!amount || typeof amount !== "number") {
    res.status(404).json({success: false, data:"Amount is required and should be a number"});
  return;
}
  if (!currency || typeof currency !== "string") {
    res.status(404).send({success: false, data:"Currency is required and should be a string"});
  return;
}

  const bookingStatus = bookingService(roomId, amount, currency);
  if(bookingStatus.success === true) {
    res.status(200).json({success: true, bookingId: bookingStatus.bookingId});
  return;
}else {
    res.status(500).send({success: false, data: "Booking failed"});
  return;
}
}
