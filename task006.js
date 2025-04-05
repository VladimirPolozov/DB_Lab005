use("FirstBase");

db.employee_blank.find(
    {
        telephone_number: {
            $regex: /.*3[^0-9]*6.*/
        }
    }
);