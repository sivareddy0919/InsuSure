<?php
// Allow cross-origin requests and set content type for CSV download
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: text/csv');
header('Content-Disposition: attachment; filename="patient_info.csv"');

// Include the database connection file (make sure your Phpconnection.php is configured properly)
include 'Phpconnection.php';  // Ensure this file contains the correct DB connection settings

// Create a connection to the database
$connection = new mysqli($servername, $username, $password, $database);

// Check the database connection
if ($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error);
}

// Query to fetch patient data
$query = "SELECT * FROM patientlogin";  // Adjust query as needed for specific data selection

// Execute the query
$result = $connection->query($query);

// Open the output stream to write CSV data
$output = fopen('php://output', 'w');

// Define the column headers for the CSV
$headers = ['patient_id', 'pname', 'mob', 'mail', 'gender', 'age', 'username', 'pass', 'image_path'];  // Adjust based on your actual table columns
fputcsv($output, $headers);

// Fetch the data from the database and write it to the CSV
while ($row = $result->fetch_assoc()) {
    // Write each row to the CSV file
    fputcsv($output, $row);
}

// Close the output stream
fclose($output);

// Close the database connection
$connection->close();
?>
