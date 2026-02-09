
// export const MASTER_FLIGHT_DATA = [
//   { id: 1, airlineName: "Emirates", originAirport: "London, UK", destAirport: "Dubai, UAE", price: 450, tripType: "One Way", class: "Economy" },
//   { id: 2, airlineName: "Qatar Airways", originAirport: "Dubai, UAE", destAirport: "London, UK", price: 320, tripType: "Round Trip", class: "Business" },
//   { id: 3, airlineName: "British Airways", originAirport: "London, UK", destAirport: "New York, USA", price: 600, tripType: "One Way", class: "Economy" },
//   { id: 4, airlineName: "Air India", originAirport: "Mumbai, India", destAirport: "Dubai, UAE", price: 250, tripType: "One Way", class: "Economy" },
//   { id: 5, airlineName: "Singapore Airlines", originAirport: "Singapore", destAirport: "London, UK", price: 900, tripType: "Round Trip", class: "First Class" },
  
// ];

export const MASTER_FLIGHT_DATA = [
  // Emirates
  { id: 1, airlineName: "Emirates", originAirport: "London, UK", destAirport: "Dubai, UAE", price: 450.00, cabinClass: "Economy", stops: 0, flightCode: "EK-202", departureTime: "10:30 AM", arrivalTime: "01:45 PM", duration: "3h 15m" },
  { id: 2, airlineName: "Emirates", originAirport: "London, UK", destAirport: "Dubai, UAE", price: 520.00, cabinClass: "Premium Economy", stops: 0, flightCode: "EK-205", departureTime: "02:15 PM", arrivalTime: "07:30 PM", duration: "3h 15m" },
  { id: 3, airlineName: "Emirates", originAirport: "London, UK", destAirport: "Dubai, UAE", price: 850.00, cabinClass: "Business", stops: 0, flightCode: "EK-210", departureTime: "06:00 AM", arrivalTime: "11:15 AM", duration: "3h 15m" },
  { id: 4, airlineName: "Emirates", originAirport: "London, UK", destAirport: "Dubai, UAE", price: 1200.00, cabinClass: "First Class", stops: 0, flightCode: "EK-215", departureTime: "08:30 PM", arrivalTime: "01:45 AM", duration: "3h 15m" },
  { id: 17, airlineName: "Emirates", originAirport: "London, UK", destAirport: "Dubai, UAE", price: 470.00, cabinClass: "Economy", stops: 0, flightCode: "EK-220", departureTime: "01:00 PM", arrivalTime: "06:15 PM", duration: "3h 15m" },
  
  // Qatar Airways
  { id: 5, airlineName: "Qatar Airways", originAirport: "London, UK", destAirport: "Dubai, UAE", price: 380.00, cabinClass: "Economy", stops: 1, flightCode: "QR-101", departureTime: "07:00 AM", arrivalTime: "08:45 PM", duration: "8h 45m" },
  { id: 6, airlineName: "Qatar Airways", originAirport: "London, UK", destAirport: "Dubai, UAE", price: 620.00, cabinClass: "Business", stops: 1, flightCode: "QR-105", departureTime: "11:30 AM", arrivalTime: "11:00 PM", duration: "8h 30m" },
  { id: 7, airlineName: "Qatar Airways", originAirport: "London, UK", destAirport: "Dubai, UAE", price: 320.00, cabinClass: "Economy", stops: 1, flightCode: "QR-108", departureTime: "08:15 PM", arrivalTime: "11:50 PM", duration: "4h 05m" },
  { id: 18, airlineName: "Qatar Airways", originAirport: "London, UK", destAirport: "Dubai, UAE", price: 410.00, cabinClass: "Economy", stops: 1, flightCode: "QR-112", departureTime: "04:15 PM", arrivalTime: "05:45 AM", duration: "9h 30m" },
  
  // British Airways
  { id: 8, airlineName: "British Airways", originAirport: "London, UK", destAirport: "Dubai, UAE", price: 500.00, cabinClass: "Economy", stops: 1, flightCode: "BA-45", departureTime: "06:00 AM", arrivalTime: "09:30 AM", duration: "3h 30m" },
  { id: 9, airlineName: "British Airways", originAirport: "London, UK", destAirport: "Dubai, UAE", price: 1200.00, cabinClass: "Business", stops: 1, flightCode: "BA-50", departureTime: "03:30 PM", arrivalTime: "06:45 PM", duration: "3h 15m" },
  { id: 10, airlineName: "British Airways", originAirport: "London, UK", destAirport: "Dubai, UAE", price: 420.00, cabinClass: "Economy", stops: 0, flightCode: "BA-55", departureTime: "05:45 AM", arrivalTime: "10:00 AM", duration: "3h 15m" },
  { id: 19, airlineName: "British Airways", originAirport: "London, UK", destAirport: "Dubai, UAE", price: 460.00, cabinClass: "Economy", stops: 1, flightCode: "BA-60", departureTime: "09:30 AM", arrivalTime: "12:45 PM", duration: "3h 15m" },
  
  // Lufthansa
  { id: 11, airlineName: "Lufthansa", originAirport: "London, UK", destAirport: "Dubai, UAE", price: 550.00, cabinClass: "Economy", stops: 0, flightCode: "LH-99", departureTime: "02:00 PM", arrivalTime: "05:15 PM", duration: "3h 15m" },
  { id: 12, airlineName: "Lufthansa", originAirport: "London, UK", destAirport: "Dubai, UAE", price: 720.00, cabinClass: "Business", stops: 0, flightCode: "LH-102", departureTime: "09:15 AM", arrivalTime: "12:30 PM", duration: "3h 15m" },
  { id: 13, airlineName: "Lufthansa", originAirport: "London, UK", destAirport: "Dubai, UAE", price: 390.00, cabinClass: "Economy", stops: 1, flightCode: "LH-105", departureTime: "04:30 PM", arrivalTime: "07:45 PM", duration: "3h 15m" },
  { id: 20, airlineName: "Lufthansa", originAirport: "London, UK", destAirport: "Dubai, UAE", price: 380.00, cabinClass: "Economy", stops: 1, flightCode: "LH-110", departureTime: "07:15 PM", arrivalTime: "10:30 PM", duration: "3h 15m" },
  
  // Singapore Airlines
  { id: 14, airlineName: "Singapore Airlines", originAirport: "London, UK", destAirport: "Dubai, UAE", price: 480.00, cabinClass: "Economy", stops: 2, flightCode: "SQ-10", departureTime: "11:00 AM", arrivalTime: "02:30 PM", duration: "3h 30m" },
  { id: 15, airlineName: "Singapore Airlines", originAirport: "London, UK", destAirport: "Dubai, UAE", price: 850.00, cabinClass: "Economy", stops: 2, flightCode: "SQ-12", departureTime: "11:00 PM", arrivalTime: "05:30 AM", duration: "13h 30m" },
  { id: 16, airlineName: "Singapore Airlines", originAirport: "London, UK", destAirport: "Dubai, UAE", price: 1100.00, cabinClass: "Business", stops: 2, flightCode: "SQ-15", departureTime: "06:00 PM", arrivalTime: "08:15 AM", duration: "14h 15m" }
];