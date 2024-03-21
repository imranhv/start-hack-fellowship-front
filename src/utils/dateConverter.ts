export default function convertDate(date: string) {
    const originalDate = new Date(date);

    // Get individual date components
    const day = originalDate.getDate();
    const month = originalDate.getMonth() + 1; // Months are zero-indexed, so we add 1
    const year = originalDate.getFullYear();

    // Format components to the desired format
    return `${day < 10 ? '0' : ''}${day}-${month < 10 ? '0' : ''}${month}-${year}`;
}