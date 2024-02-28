import React from "./ Child"

function App()
{
    let name = "Hari",  name1="Raj", name2="Bapi";
    let age=21; age1=25, age2=30;
    return (
        <div>
            <Child na={name} age={age} />
            <Child na={name1} age={age1} />
            <Child na={name2} age={age2} />
        </div>
    )
}
export default App