use("FirstBase");

db.employee_blank.find(
    { email: { $regex: /@gmail\.com$/i } }
  );