export default function minLengthCheck(string, length) {
    if (string.trim().length >= length) {
        return true;
    } else {
        return false;
    }
}
