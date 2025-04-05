use("FirstBase");

db.employee_blank.find(
    {
        email: {
            $regex: /a.*v|v.*a/
        }
    }
);