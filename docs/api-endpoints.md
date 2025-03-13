
# API Endpoints Documentation

## Prescription Endpoints

### Register Prescription
- **URL:** `/prescriptions/register`
- **Method:** `POST`
- **Description:** Registers a new prescription.
- **Request Body:**
  ```json
  {
    "patient_id": "string",
    "doctor_id": "string",
    "medication": "string",
    "dosage": "string",
    "instructions": "string"
  }
  ```
- **Response:**
  - `302 Redirect` to `/prescriptions` on success.
  - `400 Bad Request` with error message on failure.

### Get Prescription
- **URL:** `/prescriptions/:id`
- **Method:** `GET`
- **Description:** Retrieves a prescription by ID.
- **Response:**
  - `200 OK` with prescription data on success.
  - `404 Not Found` if prescription does not exist.
  - `400 Bad Request` with error message on failure.

### Update Prescription
- **URL:** `/prescriptions/:id`
- **Method:** `PUT`
- **Description:** Updates a prescription by ID.
- **Request Body:** Same as Register Prescription.
- **Response:**
  - `302 Redirect` to `/prescriptions` on success.
  - `400 Bad Request` with error message on failure.

### Delete Prescription
- **URL:** `/prescriptions/:id`
- **Method:** `DELETE`
- **Description:** Deletes a prescription by ID.
- **Response:**
  - `302 Redirect` to `/prescriptions` on success.
  - `400 Bad Request` with error message on failure.

### List Prescriptions
- **URL:** `/prescriptions`
- **Method:** `GET`
- **Description:** Lists all prescriptions.
- **Response:**
  - `200 OK` with list of prescriptions on success.
  - `400 Bad Request` with error message on failure.

## Patient Endpoints

### Register Patient
- **URL:** `/patients/register`
- **Method:** `POST`
- **Description:** Registers a new patient.
- **Request Body:**
  ```json
  {
    "name": "string",
    "age": "number",
    "gender": "string",
    "address": "string",
    "phone": "string"
  }
  ```
- **Response:**
  - `302 Redirect` to `/patients` on success.
  - `400 Bad Request` with error message on failure.

### Get Patient
- **URL:** `/patients/:id`
- **Method:** `GET`
- **Description:** Retrieves a patient by ID.
- **Response:**
  - `200 OK` with patient data on success.
  - `404 Not Found` if patient does not exist.
  - `400 Bad Request` with error message on failure.

### Update Patient
- **URL:** `/patients/:id`
- **Method:** `PUT`
- **Description:** Updates a patient by ID.
- **Request Body:** Same as Register Patient.
- **Response:**
  - `302 Redirect` to `/patients` on success.
  - `400 Bad Request` with error message on failure.

### Delete Patient
- **URL:** `/patients/:id`
- **Method:** `DELETE`
- **Description:** Deletes a patient by ID.
- **Response:**
  - `302 Redirect` to `/patients` on success.
  - `400 Bad Request` with error message on failure.

### List Patients
- **URL:** `/patients`
- **Method:** `GET`
- **Description:** Lists all patients.
- **Response:**
  - `200 OK` with list of patients on success.
  - `400 Bad Request` with error message on failure.

## Doctor Endpoints

### Register Doctor
- **URL:** `/doctors/register`
- **Method:** `POST`
- **Description:** Registers a new doctor.
- **Request Body:**
  ```json
  {
    "name": "string",
    "specialization": "string",
    "phone": "string",
    "email": "string"
  }
  ```
- **Response:**
  - `302 Redirect` to `/doctors` on success.
  - `400 Bad Request` with error message on failure.

### Get Doctor
- **URL:** `/doctors/:id`
- **Method:** `GET`
- **Description:** Retrieves a doctor by ID.
- **Response:**
  - `200 OK` with doctor data on success.
  - `404 Not Found` if doctor does not exist.
  - `400 Bad Request` with error message on failure.

### Update Doctor
- **URL:** `/doctors/:id`
- **Method:** `PUT`
- **Description:** Updates a doctor by ID.
- **Request Body:** Same as Register Doctor.
- **Response:**
  - `302 Redirect` to `/doctors` on success.
  - `400 Bad Request` with error message on failure.

### Delete Doctor
- **URL:** `/doctors/:id`
- **Method:** `DELETE`
- **Description:** Deletes a doctor by ID.
- **Response:**
  - `302 Redirect` to `/doctors` on success.
  - `400 Bad Request` with error message on failure.

### List Doctors
- **URL:** `/doctors`
- **Method:** `GET`
- **Description:** Lists all doctors.
- **Response:**
  - `200 OK` with list of doctors on success.
  - `400 Bad Request` with error message on failure.

## Appointment Endpoints

### Register Appointment
- **URL:** `/appointments/register`
- **Method:** `POST`
- **Description:** Registers a new appointment.
- **Request Body:**
  ```json
  {
    "patient_id": "string",
    "doctor_id": "string",
    "date": "string",
    "time": "string",
    "reason": "string"
  }
  ```
- **Response:**
  - `302 Redirect` to `/appointments` on success.
  - `400 Bad Request` with error message on failure.

### Get Appointment
- **URL:** `/appointments/:id`
- **Method:** `GET`
- **Description:** Retrieves an appointment by ID.
- **Response:**
  - `200 OK` with appointment data on success.
  - `404 Not Found` if appointment does not exist.
  - `400 Bad Request` with error message on failure.

### Update Appointment
- **URL:** `/appointments/:id`
- **Method:** `PUT`
- **Description:** Updates an appointment by ID.
- **Request Body:** Same as Register Appointment.
- **Response:**
  - `302 Redirect` to `/appointments` on success.
  - `400 Bad Request` with error message on failure.

### Delete Appointment
- **URL:** `/appointments/:id`
- **Method:** `DELETE`
- **Description:** Deletes an appointment by ID.
- **Response:**
  - `302 Redirect` to `/appointments` on success.
  - `400 Bad Request` with error message on failure.

### List Appointments
- **URL:** `/appointments`
- **Method:** `GET`
- **Description:** Lists all appointments.
- **Response:**
  - `200 OK` with list of appointments on success.
  - `400 Bad Request` with error message on failure.

## Admin Endpoints

### Get Dashboard Stats
- **URL:** `/admin/dashboard`
- **Method:** `GET`
- **Description:** Retrieves statistics for the admin dashboard.
- **Response:**
  - `200 OK` with dashboard statistics on success.
  - `500 Internal Server Error` with error message on failure.
