export const REQUEST_APPLICATIONS = 'REQUEST_APPLICATIONS';
export const REQUEST_APPLICATIONS_FAILED = 'REQUEST_APPLICATIONS_FAILED';
export const REQUEST_APPLICATIONS_SUCCEEDED = 'REQUEST_APPLICATIONS_SUCCEEDED';

export const requestApplications = (username, password) => ({
  type: REQUEST_APPLICATIONS
});
export const requestApplicationsSucceeded = applications => ({
  type: REQUEST_APPLICATIONS_SUCCEEDED,
  applications
});
export const requestApplicationsFailed = error => ({
  type: REQUEST_APPLICATIONS_FAILED,
  error
});
