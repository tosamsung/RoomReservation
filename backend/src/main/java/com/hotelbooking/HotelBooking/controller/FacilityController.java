package com.hotelbooking.HotelBooking.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hotelbooking.HotelBooking.entity.property.Facility;
import com.hotelbooking.HotelBooking.enums.FacilityType;
import com.hotelbooking.HotelBooking.service.FacilityService;

@RestController
@RequestMapping("/facilities")
public class FacilityController {
	@Autowired
	private FacilityService facilityService;

	@PostMapping("/addAll/{propertyName}")
	public ResponseEntity<List<Facility>> addAllFacilities(@PathVariable String propertyName) {
		List<Facility> facilities = facilityService.addAllFacilitiesForProperty(propertyName);
		return ResponseEntity.ok(facilities);
	}

	@PostMapping("/add")
	public ResponseEntity<List<Facility>> addFacilities(@RequestBody List<Facility> facilities) {
		List<Facility> savedFacilities = facilityService.addFacilities(facilities);
		return ResponseEntity.ok(savedFacilities);
	}

	@GetMapping
	public List<Facility> getAllFacilities() {
		return facilityService.getAllFacilities();
	}

	@PostMapping("/insertDefaultFacilities")
	public ResponseEntity<List<Facility>> insertDefaultFacilities() {
		List<Facility> facilities = new ArrayList<>();
		facilities.add(new Facility("Swimming Pool", FacilityType.ENTERTAINMENT));
		facilities.add(new Facility("Gym", FacilityType.RECREATION));
		facilities.add(new Facility("Kitchen", FacilityType.KITCHEN));
		facilities.add(new Facility("Bathroom", FacilityType.BATHROOM));
		facilities.add(new Facility("Master Bedroom", FacilityType.BEDROOM));
		facilities.add(new Facility("Shuttle Service", FacilityType.TRANSFER));
		facilities.add(new Facility("Guided Tour", FacilityType.TOURS));
		facilities.add(new Facility("Air Conditioning", FacilityType.UTILLITIES));
		facilities.add(new Facility("Conference Room", FacilityType.ENTERTAINMENT));
		facilities.add(new Facility("Sauna", FacilityType.RECREATION));
		facilities.add(new Facility("Microwave Oven", FacilityType.KITCHEN));
		facilities.add(new Facility("Jacuzzi", FacilityType.BATHROOM));
		facilities.add(new Facility("Guest Bedroom", FacilityType.BEDROOM));
		facilities.add(new Facility("Airport Pickup", FacilityType.TRANSFER));
		facilities.add(new Facility("City Tour", FacilityType.TOURS));
		facilities.add(new Facility("Wi-Fi", FacilityType.UTILLITIES));
		facilities.add(new Facility("Pool Table", FacilityType.ENTERTAINMENT));
		facilities.add(new Facility("Yoga Studio", FacilityType.RECREATION));
		facilities.add(new Facility("Dishwasher", FacilityType.KITCHEN));
		facilities.add(new Facility("Steam Room", FacilityType.BATHROOM));
		facilities.add(new Facility("Studio Apartment", FacilityType.BEDROOM));
		facilities.add(new Facility("Car Rental", FacilityType.TRANSFER));
		facilities.add(new Facility("Historical Tour", FacilityType.TOURS));
		facilities.add(new Facility("Laundry Service", FacilityType.UTILLITIES));
		facilities.add(new Facility("Tennis Court", FacilityType.ENTERTAINMENT));
		facilities.add(new Facility("Massage Center", FacilityType.RECREATION));
		facilities.add(new Facility("Coffee Maker", FacilityType.KITCHEN));
		facilities.add(new Facility("Heated Floor", FacilityType.BATHROOM));
		facilities.add(new Facility("Penthouse Suite", FacilityType.BEDROOM));
		facilities.add(new Facility("Luxury Transport", FacilityType.TRANSFER));
		facilities.add(new Facility("Cultural Tour", FacilityType.TOURS));
		facilities.add(new Facility("Smart Home System", FacilityType.UTILLITIES));
		facilities.add(new Facility("Indoor Pool", FacilityType.ENTERTAINMENT));
		facilities.add(new Facility("Golf Course", FacilityType.RECREATION));
		facilities.add(new Facility("Blender", FacilityType.KITCHEN));
		facilities.add(new Facility("Rain Shower", FacilityType.BATHROOM));
		facilities.add(new Facility("Family Suite", FacilityType.BEDROOM));
		facilities.add(new Facility("Private Chauffeur", FacilityType.TRANSFER));
		facilities.add(new Facility("Adventure Tour", FacilityType.TOURS));
		facilities.add(new Facility("Pet-Friendly Rooms", FacilityType.BEDROOM));
		facilities.add(new Facility("Private Pool", FacilityType.ENTERTAINMENT));
		facilities.add(new Facility("Ski Equipment Rental", FacilityType.RECREATION));
		facilities.add(new Facility("Juicer", FacilityType.KITCHEN));
		facilities.add(new Facility("Bidet", FacilityType.BATHROOM));
		facilities.add(new Facility("Executive Suite", FacilityType.BEDROOM));
		facilities.add(new Facility("Helicopter Transfer", FacilityType.TRANSFER));
		facilities.add(new Facility("Food Tour", FacilityType.TOURS));
		facilities.add(new Facility("High-Speed Internet", FacilityType.UTILLITIES));
		facilities.add(new Facility("Game Room", FacilityType.ENTERTAINMENT));
		facilities.add(new Facility("Rock Climbing Wall", FacilityType.RECREATION));
		facilities.add(new Facility("Coffee Grinder", FacilityType.KITCHEN));
		facilities.add(new Facility("Rainforest Shower", FacilityType.BATHROOM));
		facilities.add(new Facility("Presidential Suite", FacilityType.BEDROOM));
		facilities.add(new Facility("Luxury Yacht Charter", FacilityType.TRANSFER));
		facilities.add(new Facility("Wine Tasting Tour", FacilityType.TOURS));
		facilities.add(new Facility("Energy-Efficient Lighting", FacilityType.UTILLITIES));
		facilities.add(new Facility("Garden", FacilityType.ENTERTAINMENT));
		facilities.add(new Facility("Bicycle Rental", FacilityType.RECREATION));
		facilities.add(new Facility("Electric Kettle", FacilityType.KITCHEN));
		facilities.add(new Facility("Underfloor Heating", FacilityType.BATHROOM));
		facilities.add(new Facility("Luxury Suite", FacilityType.BEDROOM));
		facilities.add(new Facility("Private Jet Transfer", FacilityType.TRANSFER));
		facilities.add(new Facility("Culinary Workshop", FacilityType.TOURS));
		facilities.add(new Facility("Solar Panels", FacilityType.UTILLITIES));
		facilities.add(new Facility("Music Lounge", FacilityType.ENTERTAINMENT));
		facilities.add(new Facility("Spa", FacilityType.RECREATION));
		facilities.add(new Facility("Toaster", FacilityType.KITCHEN));
		facilities.add(new Facility("Steam Shower", FacilityType.BATHROOM));
		facilities.add(new Facility("Honeymoon Suite", FacilityType.BEDROOM));
		facilities.add(new Facility("Limousine Service", FacilityType.TRANSFER));
		facilities.add(new Facility("Wine Cellar", FacilityType.TOURS));
		facilities.add(new Facility("Backup Generator", FacilityType.UTILLITIES));
		facilities.add(new Facility("Rooftop Terrace", FacilityType.ENTERTAINMENT));
		facilities.add(new Facility("Horseback Riding", FacilityType.RECREATION));
		facilities.add(new Facility("Ice Maker", FacilityType.KITCHEN));
		facilities.add(new Facility("Water Softener", FacilityType.BATHROOM));
		facilities.add(new Facility("Corner Suite", FacilityType.BEDROOM));
		facilities.add(new Facility("Chauffeur Service", FacilityType.TRANSFER));
		facilities.add(new Facility("Scenic Tour", FacilityType.TOURS));
		facilities.add(new Facility("Home Automation", FacilityType.UTILLITIES));
		facilities.add(new Facility("Outdoor Cinema", FacilityType.ENTERTAINMENT));
		facilities.add(new Facility("Beach Access", FacilityType.RECREATION));
		facilities.add(new Facility("Coffee Machine", FacilityType.KITCHEN));
		facilities.add(new Facility("Hydrotherapy Bath", FacilityType.BATHROOM));
		facilities.add(new Facility("Deluxe Suite", FacilityType.BEDROOM));
		facilities.add(new Facility("Helicopter Pad", FacilityType.TRANSFER));
		facilities.add(new Facility("Fishing Tour", FacilityType.TOURS));
		facilities.add(new Facility("Water Filtration System", FacilityType.UTILLITIES));
		facilities.add(new Facility("Virtual Golf", FacilityType.RECREATION));
		facilities.add(new Facility("Smart Refrigerator", FacilityType.KITCHEN));
		facilities.add(new Facility("Luxurious Bathrobes", FacilityType.BATHROOM));
		facilities.add(new Facility("Grand Suite", FacilityType.BEDROOM));
		facilities.add(new Facility("Luxury Shuttle Service", FacilityType.TRANSFER));
		facilities.add(new Facility("Safari Tour", FacilityType.TOURS));
		facilities.add(new Facility("Green Roof", FacilityType.UTILLITIES));
		facilities.add(new Facility("Exclusive Lounge", FacilityType.ENTERTAINMENT));
		facilities.add(new Facility("Fitness Classes", FacilityType.RECREATION));
		facilities.add(new Facility("Oven", FacilityType.KITCHEN));
		facilities.add(new Facility("Heated Towel Rack", FacilityType.BATHROOM));
		facilities.add(new Facility("Presidential Suite with Terrace", FacilityType.BEDROOM));
		facilities.add(new Facility("Private Yacht Service", FacilityType.TRANSFER));
		facilities.add(new Facility("Cultural Immersion Tour", FacilityType.TOURS));
		facilities.add(new Facility("Energy Management System", FacilityType.UTILLITIES));
		facilities.add(new Facility("Sky Bar", FacilityType.ENTERTAINMENT));
		facilities.add(new Facility("Golf Cart Rental", FacilityType.RECREATION));
		facilities.add(new Facility("Wine Cooler", FacilityType.KITCHEN));
		facilities.add(new Facility("Infrared Sauna", FacilityType.BATHROOM));
		facilities.add(new Facility("Penthouse", FacilityType.BEDROOM));
		facilities.add(new Facility("Private Car Service", FacilityType.TRANSFER));
		facilities.add(new Facility("Art Tour", FacilityType.TOURS));
		facilities.add(new Facility("Central Air Conditioning", FacilityType.UTILLITIES));
		facilities.add(new Facility("Rooftop Garden", FacilityType.ENTERTAINMENT));
		facilities.add(new Facility("Rock Climbing Wall", FacilityType.RECREATION));
		facilities.add(new Facility("Breakfast Bar", FacilityType.KITCHEN));
		facilities.add(new Facility("Personal Trainer", FacilityType.BATHROOM));
		facilities.add(new Facility("Ocean View Suite", FacilityType.BEDROOM));
		facilities.add(new Facility("Luxury Helicopter Charter", FacilityType.TRANSFER));
		facilities.add(new Facility("Historical Landmark Tour", FacilityType.TOURS));
		facilities.add(new Facility("Smart Lighting", FacilityType.UTILLITIES));
		facilities.add(new Facility("Meditation Room", FacilityType.RECREATION));
		facilities.add(new Facility("Sushi Bar", FacilityType.KITCHEN));
		facilities.add(new Facility("Jacuzzi Suite", FacilityType.BATHROOM));
		facilities.add(new Facility("Sky Suite", FacilityType.BEDROOM));
		facilities.add(new Facility("Luxury Limousine", FacilityType.TRANSFER));
		facilities.add(new Facility("Helicopter Tour", FacilityType.TOURS));
		facilities.add(new Facility("Renewable Energy System", FacilityType.UTILLITIES));
		facilities.add(new Facility("Art Gallery", FacilityType.ENTERTAINMENT));
		facilities.add(new Facility("Indoor Golf Simulator", FacilityType.RECREATION));
		facilities.add(new Facility("Wine Tasting Room", FacilityType.KITCHEN));
		facilities.add(new Facility("Private Spa", FacilityType.BATHROOM));
		facilities.add(new Facility("Executive Floor", FacilityType.BEDROOM));
		facilities.add(new Facility("Private Yacht", FacilityType.TRANSFER));
		facilities.add(new Facility("Cooking Class", FacilityType.TOURS));
		facilities.add(new Facility("Automated Climate Control", FacilityType.UTILLITIES));
		facilities.add(new Facility("Virtual Reality Room", FacilityType.ENTERTAINMENT));
		facilities.add(new Facility("Horse Riding Lessons", FacilityType.RECREATION));
		facilities.add(new Facility("Wine Cellar", FacilityType.KITCHEN));
		facilities.add(new Facility("Outdoor Hot Tub", FacilityType.BATHROOM));
		facilities.add(new Facility("Luxury Chalet", FacilityType.BEDROOM));
		facilities.add(new Facility("Private Jet Charter", FacilityType.TRANSFER));
		facilities.add(new Facility("Cooking Demonstrations", FacilityType.TOURS));
		facilities.add(new Facility("Advanced Water Purification", FacilityType.UTILLITIES));
		facilities.add(new Facility("Luxury Rooftop Lounge", FacilityType.ENTERTAINMENT));
		facilities.add(new Facility("Indoor Sports Complex", FacilityType.RECREATION));
		facilities.add(new Facility("Gourmet Kitchen", FacilityType.KITCHEN));
		facilities.add(new Facility("Deluxe Steam Room", FacilityType.BATHROOM));
		facilities.add(new Facility("Grand Villa", FacilityType.BEDROOM));
		facilities.add(new Facility("Personal Chauffeur", FacilityType.TRANSFER));
		facilities.add(new Facility("Exclusive Sightseeing Tours", FacilityType.TOURS));
		facilities.add(new Facility("Eco-Friendly Energy Solutions", FacilityType.UTILLITIES));
		facilities.add(new Facility("Private Cinema", FacilityType.ENTERTAINMENT));
		facilities.add(new Facility("Mountain Biking", FacilityType.RECREATION));
		facilities.add(new Facility("Smart Oven", FacilityType.KITCHEN));
		facilities.add(new Facility("Sauna Suite", FacilityType.BATHROOM));
		facilities.add(new Facility("Royal Suite", FacilityType.BEDROOM));
		facilities.add(new Facility("Exclusive Car Rental", FacilityType.TRANSFER));
		facilities.add(new Facility("Guided Nature Walks", FacilityType.TOURS));
		facilities.add(new Facility("Automated Home System", FacilityType.UTILLITIES));
		facilities.add(new Facility("Cigar Lounge", FacilityType.ENTERTAINMENT));
		facilities.add(new Facility("Kayaking", FacilityType.RECREATION));
		facilities.add(new Facility("Luxury Coffee Maker", FacilityType.KITCHEN));
		facilities.add(new Facility("Heated Pool", FacilityType.BATHROOM));
		facilities.add(new Facility("Penthouse Suite", FacilityType.BEDROOM));
		facilities.add(new Facility("VIP Shuttle Service", FacilityType.TRANSFER));
		facilities.add(new Facility("Historical Site Excursions", FacilityType.TOURS));
		facilities.add(new Facility("Rainwater Harvesting", FacilityType.UTILLITIES));
		facilities.add(new Facility("Luxury Pool Table", FacilityType.ENTERTAINMENT));
		facilities.add(new Facility("Snowboarding", FacilityType.RECREATION));
		facilities.add(new Facility("Smart Dishwasher", FacilityType.KITCHEN));
		facilities.add(new Facility("Outdoor Sauna", FacilityType.BATHROOM));
		facilities.add(new Facility("Villa with Garden", FacilityType.BEDROOM));
		facilities.add(new Facility("Private Limousine", FacilityType.TRANSFER));
		facilities.add(new Facility("Cultural Experience Tours", FacilityType.TOURS));
		facilities.add(new Facility("Energy-Efficient Windows", FacilityType.UTILLITIES));
		facilities.add(new Facility("Luxury Karaoke Room", FacilityType.ENTERTAINMENT));
		facilities.add(new Facility("Scuba Diving", FacilityType.RECREATION));
		facilities.add(new Facility("High-End Toaster", FacilityType.KITCHEN));
		facilities.add(new Facility("Rain Shower", FacilityType.BATHROOM));
		facilities.add(new Facility("Oceanfront Suite", FacilityType.BEDROOM));
		facilities.add(new Facility("Private Helicopter Service", FacilityType.TRANSFER));
		facilities.add(new Facility("Exclusive Art Tours", FacilityType.TOURS));
		facilities.add(new Facility("Advanced HVAC System", FacilityType.UTILLITIES));
		facilities.add(new Facility("Luxury Game Console", FacilityType.ENTERTAINMENT));
		facilities.add(new Facility("Zip Lining", FacilityType.RECREATION));
		facilities.add(new Facility("High-Tech Blender", FacilityType.KITCHEN));
		facilities.add(new Facility("Hydromassage Bath", FacilityType.BATHROOM));
		facilities.add(new Facility("Garden View Suite", FacilityType.BEDROOM));
		facilities.add(new Facility("Private Chauffeur", FacilityType.TRANSFER));
		facilities.add(new Facility("Gourmet Culinary Tours", FacilityType.TOURS));
		facilities.add(new Facility("Advanced Water Filtration", FacilityType.UTILLITIES));
		facilities.add(new Facility("Interactive Art Installations", FacilityType.ENTERTAINMENT));
		facilities.add(new Facility("Rock Climbing", FacilityType.RECREATION));
		facilities.add(new Facility("Wine Tasting Experience", FacilityType.KITCHEN));
		facilities.add(new Facility("Luxury Steam Bath", FacilityType.BATHROOM));
		facilities.add(new Facility("Premium Suite", FacilityType.BEDROOM));
		facilities.add(new Facility("Exclusive Transfer Service", FacilityType.TRANSFER));
		facilities.add(new Facility("Adventure Tours", FacilityType.TOURS));
		facilities.add(new Facility("Green Energy Solutions", FacilityType.UTILLITIES));
		facilities.add(new Facility("Infinity Pool", FacilityType.ENTERTAINMENT));
		facilities.add(new Facility("Hot Air Balloon Ride", FacilityType.RECREATION));
		facilities.add(new Facility("Professional Chef's Kitchen", FacilityType.KITCHEN));
		facilities.add(new Facility("Private Yoga Studio", FacilityType.BATHROOM));
		facilities.add(new Facility("Executive Penthouse", FacilityType.BEDROOM));
		facilities.add(new Facility("Private Boat Charter", FacilityType.TRANSFER));
		facilities.add(new Facility("Eco-Friendly Tours", FacilityType.TOURS));
		facilities.add(new Facility("Energy-Efficient Heating", FacilityType.UTILLITIES));
		facilities.add(new Facility("Luxury Casino", FacilityType.ENTERTAINMENT));
		facilities.add(new Facility("Horse-Drawn Carriage Rides", FacilityType.RECREATION));
		facilities.add(new Facility("Gourmet Snack Bar", FacilityType.KITCHEN));
		facilities.add(new Facility("Deluxe Spa Treatments", FacilityType.BATHROOM));
		facilities.add(new Facility("Royal Garden Suite", FacilityType.BEDROOM));
		facilities.add(new Facility("Private Luxury Coach", FacilityType.TRANSFER));
		facilities.add(new Facility("Customized Adventure Tours", FacilityType.TOURS));
		facilities.add(new Facility("Sustainable Building Materials", FacilityType.UTILLITIES));
		facilities.add(new Facility("Indoor Waterfall", FacilityType.ENTERTAINMENT));
		facilities.add(new Facility("Paragliding", FacilityType.RECREATION));
		facilities.add(new Facility("High-End Espresso Machine", FacilityType.KITCHEN));
		facilities.add(new Facility("Rainforest Shower", FacilityType.BATHROOM));
		facilities.add(new Facility("Luxury Loft", FacilityType.BEDROOM));
		facilities.add(new Facility("Private Submarine", FacilityType.TRANSFER));
		facilities.add(new Facility("Exclusive Wine Tours", FacilityType.TOURS));
		facilities.add(new Facility("Solar Water Heating", FacilityType.UTILLITIES));
		facilities.add(new Facility("Luxury Ice Rink", FacilityType.ENTERTAINMENT));
		facilities.add(new Facility("Surfing Lessons", FacilityType.RECREATION));
		facilities.add(new Facility("State-of-the-Art Kitchenette", FacilityType.KITCHEN));
		facilities.add(new Facility("Personal Hammam", FacilityType.BATHROOM));
		facilities.add(new Facility("Beachfront Bungalow", FacilityType.BEDROOM));
		facilities.add(new Facility("Private Helicopter Tours", FacilityType.TRANSFER));
		facilities.add(new Facility("Culinary Arts Workshop", FacilityType.TOURS));
		facilities.add(new Facility("Advanced Insulation", FacilityType.UTILLITIES));
		facilities.add(new Facility("Virtual Golf Simulator", FacilityType.ENTERTAINMENT));
		facilities.add(new Facility("Rock Climbing Wall", FacilityType.RECREATION));
		facilities.add(new Facility("Sous Vide Machine", FacilityType.KITCHEN));
		facilities.add(new Facility("Whirlpool Tub", FacilityType.BATHROOM));
		facilities.add(new Facility("Mountain View Cabin", FacilityType.BEDROOM));
		facilities.add(new Facility("Private Yacht Charter", FacilityType.TRANSFER));
		facilities.add(new Facility("Guided Mountain Tours", FacilityType.TOURS));
		facilities.add(new Facility("Smart Home Integration", FacilityType.UTILLITIES));
		facilities.add(new Facility("Exclusive Beach Club", FacilityType.ENTERTAINMENT));
		facilities.add(new Facility("Personalized Fitness Program", FacilityType.RECREATION));
		facilities.add(new Facility("Wine Pairing Experience", FacilityType.KITCHEN));
		facilities.add(new Facility("Luxury Massage Chair", FacilityType.BATHROOM));
		facilities.add(new Facility("Penthouse with Private Pool", FacilityType.BEDROOM));
		facilities.add(new Facility("High-End Limousine Service", FacilityType.TRANSFER));
		facilities.add(new Facility("Historic Landmark Excursions", FacilityType.TOURS));
		facilities.add(new Facility("Green Roof Garden", FacilityType.UTILLITIES));
		facilities.add(new Facility("Ocean View Balcony", FacilityType.VIEW));
		facilities.add(new Facility("Mountain View Terrace", FacilityType.VIEW));
		facilities.add(new Facility("City Skyline View Suite", FacilityType.VIEW));
		facilities.add(new Facility("River View Room", FacilityType.VIEW));
		facilities.add(new Facility("Garden View Lounge", FacilityType.VIEW));
		facilities.add(new Facility("Panoramic View Deck", FacilityType.VIEW));
		facilities.add(new Facility("Sunset View Suite", FacilityType.VIEW));
		facilities.add(new Facility("Lake View Cabin", FacilityType.VIEW));
		facilities.add(new Facility("Countryside View Suite", FacilityType.VIEW));
		facilities.add(new Facility("Skyline View Rooftop", FacilityType.VIEW));
		facilities.add(new Facility("Beachfront View Suite", FacilityType.VIEW));
		facilities.add(new Facility("Forest View Cabin", FacilityType.VIEW));
		facilities.add(new Facility("Sea View Penthouse", FacilityType.VIEW));
		facilities.add(new Facility("Desert View Lodge", FacilityType.VIEW));
		facilities.add(new Facility("Hillside View Villa", FacilityType.VIEW));
		facilities.add(new Facility("Skyline View Apartment", FacilityType.VIEW));
		facilities.add(new Facility("Golf Course View Room", FacilityType.VIEW));
		facilities.add(new Facility("Valley View Chalet", FacilityType.VIEW));
		facilities.add(new Facility("Historic Landmark View Suite", FacilityType.VIEW));
		facilities.add(new Facility("Riverfront View Room", FacilityType.VIEW));
		facilities.add(new Facility("Cliffside View Suite", FacilityType.VIEW));
		facilities.add(new Facility("Castle View Room", FacilityType.VIEW));
		facilities.add(new Facility("Sunrise View Suite", FacilityType.VIEW));
		facilities.add(new Facility("Cityscape View Loft", FacilityType.VIEW));
		facilities.add(new Facility("Garden and Lake View Villa", FacilityType.VIEW));
		facilities.add(new Facility("Horizon View Suite", FacilityType.VIEW));
		facilities.add(new Facility("Rooftop View Penthouse", FacilityType.VIEW));
		facilities.add(new Facility("Countryside and Forest View Room", FacilityType.VIEW));
		facilities.add(new Facility("Mountain Peak View Chalet", FacilityType.VIEW));
		facilities.add(new Facility("Panoramic Sea View Suite", FacilityType.VIEW));
		facilities.add(new Facility("Waterfall View Room", FacilityType.VIEW));
		facilities.add(new Facility("Lagoon View Villa", FacilityType.VIEW));
		facilities.add(new Facility("Mountain Range View Suite", FacilityType.VIEW));
		facilities.add(new Facility("Sunset View Balcony", FacilityType.VIEW));
		facilities.add(new Facility("Harbor View Penthouse", FacilityType.VIEW));
		facilities.add(new Facility("Canyon View Lodge", FacilityType.VIEW));
		facilities.add(new Facility("Starlight View Suite", FacilityType.VIEW));
		facilities.add(new Facility("Urban Park View Room", FacilityType.VIEW));
		facilities.add(new Facility("Scenic View Cottage", FacilityType.VIEW));
		facilities.add(new Facility("Cloud View Room", FacilityType.VIEW));
		facilities.add(new Facility("Historic View Suite", FacilityType.VIEW));
		facilities.add(new Facility("Waterfront View Cabin", FacilityType.VIEW));
		facilities.add(new Facility("Skyline and River View Loft", FacilityType.VIEW));
		facilities.add(new Facility("Forest and Mountain View Suite", FacilityType.VIEW));
		facilities.add(new Facility("Beach and Garden View Room", FacilityType.VIEW));
		facilities.add(new Facility("Desert and Oasis View Villa", FacilityType.VIEW));
		facilities.add(new Facility("Panoramic City View Apartment", FacilityType.VIEW));
		facilities.add(new Facility("Sunrise and Ocean View Suite", FacilityType.VIEW));
		facilities.add(new Facility("Golf Course and Lake View Room", FacilityType.VIEW));
		facilities.add(new Facility("Countryside and Vineyard View Lodge", FacilityType.VIEW));
		facilities.add(new Facility("City Lights View Suite", FacilityType.VIEW));
		facilities.add(new Facility("Mountain and Lake View Cabin", FacilityType.VIEW));
		facilities.add(new Facility("Desert Sunset View Villa", FacilityType.VIEW));
		facilities.add(new Facility("Ocean Horizon View Room", FacilityType.VIEW));
		facilities.add(new Facility("River and Countryside View Suite", FacilityType.VIEW));
		facilities.add(new Facility("Skyline and Harbor View Loft", FacilityType.VIEW));
		facilities.add(new Facility("Forest Canopy View Lodge", FacilityType.VIEW));
		facilities.add(new Facility("Starlit Night View Suite", FacilityType.VIEW));
		facilities.add(new Facility("Sunset and Beach View Room", FacilityType.VIEW));
		facilities.add(new Facility("Urban Skyline and Park View Apartment", FacilityType.VIEW));
		facilities.add(new Facility("Coastal View Suite", FacilityType.VIEW));
		facilities.add(new Facility("Historic Cityscape View Room", FacilityType.VIEW));
		facilities.add(new Facility("Alpine View Chalet", FacilityType.VIEW));
		facilities.add(new Facility("Oceanfront View Penthouse", FacilityType.VIEW));
		facilities.add(new Facility("Vineyard View Villa", FacilityType.VIEW));
		facilities.add(new Facility("Lakeside View Lodge", FacilityType.VIEW));
		facilities.add(new Facility("Countryside Panorama Suite", FacilityType.VIEW));
		facilities.add(new Facility("Highland View Cabin", FacilityType.VIEW));
		facilities.add(new Facility("Skyline and Harbor View Suite", FacilityType.VIEW));
		facilities.add(new Facility("Serene Lake View Room", FacilityType.VIEW));

		List<Facility> savedFacilities = facilityService.addFacilities(facilities);

		return ResponseEntity.ok(savedFacilities);
	}
}
