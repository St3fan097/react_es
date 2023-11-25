import { useState } from "react";

export function FilteredList () {
    const [dataList, setDataList] = useState([
        { id: 1, name: "John", age: 25 },
        { id: 2, name: "Jane", age: 17 },
        { id: 3, name: "Joe", age: 30 },
        { id: 4, name: "Ste", age: 20 },
        { id: 5, name: "Alex", age: 10 }
    ]);

    const filtered = useMemo(() => {
        return dataList.filter(item => item.age > 18);
    }, [dataList]);

    const handleAddPerson = () => {
        const newPerson = { id: dataList.length + 1, name: "New Person", age: 20 };
        setDataList([...dataList, newPerson]);
    };

    return (
        <div>
            <h1>Filtered list</h1>
            <ul>
                {filtered.map(item => (
                    <li key={item.id}>
                        {item.name} - Age: {item.age}
                    </li>
                ))}
            </ul>

            <button onClick={handleAddPerson}>Add Person</button>
        </div>
    );
};    // l'esercizio è sbagliato
