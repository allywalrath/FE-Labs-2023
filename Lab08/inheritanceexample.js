// PROMOTION SENDER CLASS:
class PromotionSender {
    constructor() {

    }

    sendNotification(notification) { // 3) sends them a notification with the discount
        console.log("Sending: " + notification);
    }

    findUsersWithStatus(status) { // 1) finds users with a specific status
        let users = getUsers(status);
        return users;
    }

    calculateDiscount(status) { // 2) gives them a discount based on the status
        if (status === "GOLD") {
            return .3; // 30% discount
        } else if (status === "SILVER") {
            return .15; // 15% discount
        }
        return 0; // else, no discount
    }
}

/* instead of writing out a program for sending emails, we're 
just gonna log out the email notification to the console to stand
in for that (the sendNotification method) */

// COLLECTIONS SENDER CLASS:

class CollectionsSender {
    constructor() {

    }

    sendNotification(notification) {
        console.log("Sending: " + notification);
    }

    findUsersWithStatus(status) {
        let users = getUsers(status);
        return users;
    }

    calculateFee(status) {
        if (status === "OVERDUE") {
            return 10; // $10 fee
        } else if (status === "DELINQUENT") {
            return 25; // $25 fee
        }
        return 5; // else, return a $5 fee
    }
}

/* in part 2: extract the common code into a parent class, and then have the 
children classes inherit that code */

// common code becomes manageable in one place, maintainability becomes easier