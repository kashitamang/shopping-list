// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderItem } from '../render-utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('renderItem function renders a div', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<div>666 cobb salads</div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderItem({ quantity: 666, name: 'cobb salads', purchased: false });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('renderItem() should add class of cross-off if purchased', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<div class="cross-off">666 cobb salads</div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderItem({ quantity: 666, name: 'cobb salads', purchased: true });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});