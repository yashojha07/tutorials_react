import { useState } from "react";

export const Drop = () => {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);

    function secondDrop() {
        if (open2 === true) {
            return (
                <ol style={{ marginLeft: "10px" }}>
                    <li>item a</li>
                    <li>item b</li>
                </ol>
            );
        }
    }

    return (
        <div>
            <div
                onClick={() => {
                    setOpen(!open);
                }}
            >
                CLICK ME TO DROP DOWN
            </div>
            <div>
                {open === false ? (
                    ""
                ) : (
                    <ol>
                        <li
                            onClick={() => setOpen2(!open2)}
                        >
                            item 1 {secondDrop()}
                        </li>
                        <li
                            onClick={() => setOpen2(!open2)}
                        >
                            item 2 {secondDrop()}
                        </li>
                        <li
                            onClick={() => setOpen2(!open2)}
                        >
                            item 3 {secondDrop()}
                        </li>
                    </ol>
                )}
            </div>
        </div>
    );
}
