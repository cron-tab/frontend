'use client';

export default function Button() {
    const onClick = () => {
        alert('deep link test');
    };

    return (
        <button onClick={onClick}>deep link test</button>
    );
}
