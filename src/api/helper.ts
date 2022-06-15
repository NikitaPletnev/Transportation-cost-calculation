export const calculateCost = (formData: { [p: string]: File | string }): Promise<Response> => {
    return fetch(`/api/calc_cost?${Object.entries(formData).map((opt, index) => {
        return `${index !== 0 ? '&' : ''}${opt[0]}=${opt[1]}`
    })}`)
}
