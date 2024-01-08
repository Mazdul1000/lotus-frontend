export const getBaseUrl = () => {
    return process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:5002/api/v1"
}