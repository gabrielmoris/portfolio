const aws = require("aws-sdk");

let secrets;
if (process.env.NODE_ENV == "production") {
    secrets = process.env; 
} else {
    secrets = require("../secrets.json"); 
}

const ses = new aws.SES({
    accessKeyId: secrets.AWS_KEY,
    secretAccessKey: secrets.AWS_SECRET,
    region: "us-east-1", 
});

module.exports.sendEmail = function (recipient, subject, body) {
    return ses
        .sendEmail({
            Source: "My Portfolio<gabrielcmoris@gmail.com>",
            Destination: {
                ToAddresses: [recipient],
            },
            Message: {
                Body: {
                    Text: {
                        Data: body,
                    },
                },
                Subject: {
                    Data: subject,
                },
            },
        })
        .promise()
        .then(() => console.log("email delivery successfully"))
        .catch((err) => {
            console.log("Error sending email", err);
        });
};
