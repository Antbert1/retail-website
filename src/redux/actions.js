export const LOADING = 'LOADING';

export function setLoading(loading) {
    return {
        type: LOADING,
        loading,
    };
}