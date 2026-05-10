const db = require("../config/db.js");
const calculateDistance = require("../utils/distanceCalculator.js");

exports.addSchool = async (req, res) => {
  try {
    const { id, name, address, latitude, longitude } = req.body;

    if (
      !id ||
      !name ||
      !address ||
      latitude === undefined ||
      longitude === undefined
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    await db.query(
      "INSERT INTO schools (id, name, adress, latitude, longitude) VALUES (?, ?, ?, ?, ?)",
      [id, name, address, latitude, longitude]
    );

    res.status(201).json({
      success: true,
      message: "School added successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.listSchools = async (req, res) => {
  try {
    const userLat = parseFloat(req.query.latitude);
    const userLon = parseFloat(req.query.longitude);

    if (isNaN(userLat) || isNaN(userLon)) {
      return res.status(400).json({
        success: false,
        message: "Invalid coordinates",
      });
    }

    const [schools] = await db.query("SELECT * FROM schools");

    const sortedSchools = schools
      .map((school) => {
        const distance = calculateDistance(
          userLat,
          userLon,
          school.latitude,
          school.longitude
        );

        return {
          ...school,
          distance: distance.toFixed(2) + " km",
        };
      })
      .sort(
        (a, b) =>
          parseFloat(a.distance) - parseFloat(b.distance)
      );

    res.status(200).json({
      success: true,
      schools: sortedSchools,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};