import './chip.scss';

function Chip({
    isEmpty,
    skill
}) {
    return (
        <div className={`chip-container ${isEmpty ? "empty" : "filled"}`}>
            <span>{skill}</span>
        </div>
    );
}

export default Chip;