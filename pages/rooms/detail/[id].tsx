import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface Room {
  id: number;
  type: "deluxe" | "suite" | "standard";
  name: string;
  description: string;
  price: number;
  image: string;
  guests: string;
  size: string;
  bed: string;
  amenities: string[];
  averageRating?: number;
  comments: string[];
}

const mockRooms: Room[] = [
  {
    id: 1,
    type: "deluxe",
    name: "Presidential Suite",
    description: "A spacious room with all modern amenities and a beautiful view. Perfect for your stay.",
    price: 499,
    image: "/assets/image/bg_home.svg",
    guests: "2 Guests",
    size: "255 Feet²",
    bed: "King Bed",
    amenities: ["Cable TV", "Shower", "Safe Box", "Free Wifi", "Work Desk", "Refrigerator"],
    comments: [],
  },
  {
    id: 2,
    type: "suite",
    name: "Suite Room",
    description: "A luxurious suite with premium facilities for a memorable stay.",
    price: 499,
    image: "/assets/image/bg_home.svg",
    guests: "2 Guests",
    size: "255 Feet²",
    bed: "King Bed",
    amenities: ["Cable TV", "Shower", "Safe Box", "Free Wifi", "Work Desk", "Refrigerator"],
    comments: [],
  },
];

const RoomDetailPage: React.FC = () => {
  const { query } = useRouter();
  const [room, setRoom] = useState<Room | null>(null);
  const [rating, setRating] = useState<number>(0);
  const [newComment, setNewComment] = useState<string>("");

  useEffect(() => {
    if (query.id) {
      const roomId = Number.parseInt(query.id as string, 10);
      const foundRoom = mockRooms.find((room) => room.id === roomId);
      setRoom(foundRoom || null);
    }
  }, [query.id]);

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = () => {
    if (newComment.trim() && room) {
      setRoom({
        ...room,
        comments: [...room.comments, newComment],
      });
      setNewComment("");
    }
  };

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  if (!room) {
    return <div>Room not found</div>;
  }

  return (
    <div className="container my-5">
      <div className="row">
        {/* Left section: Room details */}
        <div className="col-md-8">
          <img
            src={room.image || "/placeholder.svg"}
            className="img-fluid rounded mb-4"
            alt={room.name}
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
            }}
          />
          <h1 className="display-4 mb-3">{room.name}</h1>
          <p className="text-muted mb-4">
            <span className="fw-bold">{room.guests}</span> · {room.size} · {room.bed}
          </p>
          <p className="text-muted">{room.description}</p>

          {/* Room Amenities */}
          <div className="mt-5">
            <h4 className="fw-bold mb-3">Room Amenities</h4>
            <ul className="list-unstyled">
              {room.amenities.map((amenity, index) => (
                <li key={index} className="d-flex align-items-center">
                  <i className="fa fa-check-circle text-success me-2"></i>
                  {amenity}
                </li>
              ))}
            </ul>
          </div>

          {/* Rating Section */}
          <div className="mt-5">
            <h4 className="fw-bold mb-3">Rate this Room</h4>
            <div>
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill={star <= rating ? "#ffc107" : "none"}
                  stroke={star <= rating ? "#ffc107" : "#6c757d"}
                  strokeWidth="2"
                  className="me-2"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleRating(star)}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.431L24 9.412l-6 5.847 1.42 8.312L12 18.813 4.58 23.571 6 15.259 0 9.412l8.332-1.394L12 .587z" />
                </svg>
              ))}
            </div>
            <p>
              {rating} Star{rating !== 1 && "s"}
            </p>
          </div>

          {/* Comment Section */}
          <div className="mt-5">
            <h4 className="fw-bold mb-3">Comments</h4>
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="Add a comment..."
                value={newComment}
                onChange={handleCommentChange}
              />
              <button
                className="btn btn-primary mt-2"
                onClick={handleAddComment}
                disabled={!newComment.trim()}
              >
                Add Comment
              </button>
            </div>
            <div className="mt-3">
              {room.comments.length > 0 ? (
                room.comments.map((comment, index) => (
                  <div key={index} className="mb-2 p-2 border border-light rounded">
                    {comment}
                  </div>
                ))
              ) : (
                <p>No comments yet. Be the first to comment!</p>
              )}
            </div>
          </div>

        </div>

        {/* Right section: Reserve */}
        <div className="col-md-4">
          <div className="bg-dark text-white p-4 rounded d-flex flex-column">
            <h4 className="fw-bold mb-4">Reserve</h4>
            <div className="mb-3">
              <div className="text-white">
                From <span className="text-warning">${room.price}/night</span>
              </div>
            </div>
            <div className="d-flex flex-column mb-3">
              <label htmlFor="checkin" className="form-label">
                Check-in
              </label>
              <input
                type="date"
                className="form-control bg-dark text-white"
                id="checkin"
                defaultValue="2025-01-31"
              />
            </div>
            <div className="d-flex flex-column mb-3">
              <label htmlFor="checkout" className="form-label">
                Check-out
              </label>
              <input
                type="date"
                className="form-control bg-dark text-white"
                id="checkout"
                defaultValue="2025-02-02"
              />
            </div>
            <button className="btn btn-warning w-100 mt-3">Book Your Stay</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailPage;
