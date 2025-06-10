import React, { useEffect, useState } from 'react';

function CourseDescription({ courseName }) {
    const [summary, setSummary] = useState('Loading course description...');
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchWikiSummary() {
            try {
                const response = await fetch(
                    `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(courseName)}`
                );
                if (!response.ok) throw new Error('No Wikipedia article found');

                const data = await response.json();
                if (data.extract) {
                    setSummary(data.extract);
                } else {
                    setSummary('No description found on Wikipedia.');
                }
            } catch (err) {
                setError(err.message);
                setSummary(null);
            }
        }

        fetchWikiSummary();
    }, [courseName]);

    if (error) return <p>Error: {error}</p>;
    return <p>{summary}</p>;
}

export default CourseDescription;
