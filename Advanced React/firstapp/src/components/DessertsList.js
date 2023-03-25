//filter vs sorting vs map

function DessertsList(props){

    /*
    The first requirement is to display desserts that have less than 500 calories. 
    That means Cheesecake, which has 600 cal, should be omitted. When you need to eliminate elements
     from your lists based on a certain condition or set of conditions, you need to use the filter() method.

    The filter method creates a copy of the array, filtered down to just the elements 
    from the original array that pass the test. In order words, 
    it will return a new list with just the elements that fulfil the condition.

    Each dessert from the list has a property called calories, which is an integer 
    representing the number of calories. Therefore, the condition to be implemented should be as follows:
    */

    const lowCaloriesDesserts = props.data
    .filter((dessert) => {
        return dessert.calories < 500;
    })

    /*
    The second requirement you have to implement is sorting the list by calories, from low to high or in ascending order. 
    For that, arrays in JavaScript offer the sort() method, which sorts the elements of an array based 
    on a comparison function provided. The return value from that comparison function determines how the sorting is performed:
    */

    .sort((a, b) => {
        return a.calories - b.calories
    })

    /*
    Finally, to apply the desired projection and display the information as requested, you can chain the map operator 
    at the end and return a <li> item with the dessert name and its calories, both separated 
    by a dash character, and the word “cal” at the end.
    */

    .map((dessert) => {
        return (
            <li>
                {dessert.name} - {dessert.calories} cal
            </li>
        );
    });
    return <ul>{lowCaloriesDesserts}</ul>

}
export default DessertsList; 