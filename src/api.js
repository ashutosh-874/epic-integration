// api.js
import axios from 'axios';
import { FHIR_BASE_URL } from './config';

const getAccessToken = () => localStorage.getItem('epic_access_token');

// Existing function to fetch patient data
export const fetchPatientData = async (patientId) => {
  try {
    const response = await axios.get(`${FHIR_BASE_URL}/Patient/${patientId}`, {
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
        'Content-Type': 'application/fhir+json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Failed to fetch patient data', error);
    throw error;
  }
};

// New function to fetch diagnostic reports for a patient
export const fetchDiagnosticReports = async (patientId) => {
  try {
    const response = await axios.get(
      `${FHIR_BASE_URL}/DiagnosticReport?patient=${patientId}`,
      {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
          'Content-Type': 'application/fhir+json',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Failed to fetch diagnostic reports', error);
    throw error;
  }
};
