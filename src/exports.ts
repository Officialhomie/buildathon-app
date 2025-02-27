// wagmi hooks
export { useAccount, useConnect, useDisconnect } from 'wagmi';
export { injected, metaMask } from 'wagmi/connectors';

// Components
export { BlackCreateWalletButton } from './components/BlackCreateWalletButton';
export { default as IdentityComponent } from './components/BaseNames';
export { WalletComponents } from './components/WalletComponent';

// Healthcare Record Contracts - HRC Read functions
export { default as AdminRole } from './HRCReadfunctions/AdminRole';
export { default as DoctorsRole } from './HRCReadfunctions/DoctorsRole';
export { default as PatientRole } from './HRCReadfunctions/PatientRole';
export { default as GetAllDoctors } from './HRCReadfunctions/GetAllDoctors';
export { default as GetAllPatients } from './HRCReadfunctions/GetAllPatients';
export { default as HasRole } from './HRCReadfunctions/HasRole';
export { default as GetAllActiveRecords } from './HRCReadfunctions/GetAllActiveRecords';
export { default as GetAllRecordIds } from './HRCReadfunctions/GetAllRecordIDs';
export { default as GetHealthRecord } from './HRCReadfunctions/GetHealthRecordIDs';
export { default as IsPatient } from './HRCReadfunctions/IsPatient';
export { default as HasPatientConsent } from './HRCReadfunctions/HasPatientConsent';
export { default as GetRoleAdmin } from './HRCReadfunctions/GetRoleAdmin';
export { default as GetRegisteredPatient } from './HRCReadfunctions/GetRegisteredPatient';
export { default as GetRegisteredDoctor } from './HRCReadfunctions/GetRegisteredDoctor';
export { default as GetPatientRecords } from './HRCReadfunctions/GetPatientRecords';
export { default as RegisteredPatient } from './HRCReadfunctions/GetRegisteredPatient';

// Healthcare Record Contracts - HRC Write functions
export { default as RegisterPatients } from './HRCWritefunctions/RegisterPatients';
export { default as AddDoctors } from './HRCWritefunctions/AddDoctors';
export { default as AddHealthRecord } from './HRCWritefunctions/AddHealthRecord';
export { default as DeactivateRecord } from './HRCWritefunctions/DeactivateRecord';
export { default as UpdateHealthRecord } from './HRCWritefunctions/UpdateHealthRecord';
export { default as GrantRole } from './HRCWritefunctions/GrantRole';
export { default as RenounceRole } from './HRCWritefunctions/RenounceRole';
export { default as RemoveDoctor } from './HRCWritefunctions/RemoveDoctor';
export { default as GiveConsent } from './HRCWritefunctions/GiveConsent';
export { default as RevokeConsent } from './HRCWritefunctions/RevokeConsent';
export { default as RevokeRole } from './HRCWritefunctions/RevokeRole';

// Healthcare Record Contracts - HRC Events
export { default as DoctorRegisteredListener } from './HRCevents/DoctorRegisteredListener';
export { default as PatientRegisteredListener } from './HRCevents/PatientRegistered';

// Scheduling System - SS Write Functions
export { default as CancelAppointment } from './SSWriteFunctions/CancelAppointment';
export { default as ScheduleAppointment } from './SSWriteFunctions/ScheduleAppointment';
export { default as UpdateAppointment } from './SSWriteFunctions/UpdateAppointment';

// Scheduling System - SS Read Functions
export { default as GetHealthcareRecordManagement } from './SSReadFunctions/GetHealthcareRecordManagement';
export { default as CheckTakenSlots } from './SSReadFunctions/CheckTakenSlots';
export { default as GetAppointmentDetails } from './SSReadFunctions/GetAppointmentDetails';
export { default as Appointments } from './SSReadFunctions/Appointments';
export { default as GetDoctorAppointments } from './SSReadFunctions/GetDoctorsAppointment';
export { default as GetPatientAppointments } from './SSReadFunctions/GetPatientsAppointment';
export { default as GetTotalAppointments } from './SSReadFunctions/GetTotalAppointments';

// Scheduling System - SS Events
export { default as AppointmentCancelledListener } from './SSEvents/AppointmentCanceledListener';
export { default as AppointmentUpdatedListener } from './SSEvents/AppointmentUpdatedListener';
export { default as AppointmentScheduledListener } from './SSEvents/AppointmentScheduledListener';