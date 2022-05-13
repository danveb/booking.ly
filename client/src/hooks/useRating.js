export const rating = (num) => {
    if(num >= 1 && num <= 3) {
        return "Avoid"
    }
    if(num > 3 && num <= 4.5) {
        return "Poor"
    }
    if(num > 4.6 && num <= 6) {
        return "Average"
    } 
    if(num > 6 && num <= 6.9) {
        return "Good"
    } 
    if(num >= 7 && num < 8.5) {
        return "Very Good"
    } 
    if(num > 8.5 && num < 9) {
        return "Great"
    } 
    if(num >= 9 && num < 9.5) {
        return "Excellent"
    }
    if(num >= 9.5) {
        return "Exceptional"
    }
}; 