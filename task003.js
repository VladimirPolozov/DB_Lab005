use("FirstBase");

db.employee_blank.find(
    {
      email: {
        $not: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      }
    },
);