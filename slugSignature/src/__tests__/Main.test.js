/* 
  Following resources are used for this module:
  https://jestjs.io/
  https://testing-library.com/
*/

import {render, screen, fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Input from '../Input';
import Main from '../Main';
import Preview from '../Preview';
import Des1 from '../Des1';

// The following test checks if the title is rendered:

test('Shows Title', () => {
  render(<Main />);
  const linkElement = screen.getByText('Slug Signature');
  expect(linkElement).toBeInTheDocument();
});

// The following tests check if different input fields are rendered:

test('Check if name text input exists', () => {
  render(<Input />);
  const name = document.getElementById('name');
  expect(name).toBeInTheDocument();
});

test('Check if title text input exists', () => {
  render(<Input />);
  const title = document.getElementById('title');
  expect(title).toBeInTheDocument();
});

test('Check if major text input exists', () => {
  render(<Input />);
  const major = document.getElementById('major');
  expect(major).toBeInTheDocument();
});

test('Check if year text input exists', () => {
  render(<Input />);
  const year = document.getElementById('year');
  expect(year).toBeInTheDocument();
});

test('Check if email text input exists', () => {
  render(<Input />);
  const email = document.getElementById('email');
  expect(email).toBeInTheDocument();
});

test('Check if department text input exists', () => {
  render(<Input />);
  const department = document.getElementById('department');
  expect(department).toBeInTheDocument();
});

test('Check if phone number text input exists', () => {
  render(<Input />);
  const phone = document.getElementById("phone");
  expect(phone).toBeInTheDocument();
});

test('Check if college text input exists', () => {
  render(<Input />);
  const college = document.getElementById("college");
  expect(college).toBeInTheDocument();
});

test('Check if choose file button exists', () => {
  render(<Input />);
  const picture = document.getElementById("picture");
  expect(picture).toBeInTheDocument();
});

// The following tests check if the input fields are functional:

test('check if user can enter name input', () => {
  render(<Main />);
  const name = screen.getByPlaceholderText("Jane Doe");
  fireEvent.change(name, {target: {value: 'test'}});
  expect(name.value).toBe('test');
});

test('check if user can enter title input', () => {
  render(<Main />);
  const title = screen.getByPlaceholderText("Student");
  fireEvent.change(title, {target: {value: 'test'}});
  expect(title.value).toBe('test');
});

test('check if user can enter major input', () => {
  render(<Main />);
  const major = screen.getByPlaceholderText("Computer Science");
  fireEvent.change(major, {target: {value: 'test'}});
  expect(major.value).toBe('test');
});

test('check if user can enter year input', () => {
  render(<Main />);
  const year = screen.getByPlaceholderText("2022");
  fireEvent.change(year, {target: {value: 'test'}});
  expect(year.value).toBe('test');
});

test('check if user can enter Affiliated College input', () => {
  render(<Main />);
  const affCollege = screen.getByPlaceholderText("Stevenson College");
  fireEvent.change(affCollege, {target: {value: 'test'}});
  expect(affCollege.value).toBe('test');
});

test('check if user can enter department input', () => {
  render(<Main />);
  const department = screen.getByPlaceholderText("Baskin Engineering");
  fireEvent.change(department, {target: {value: 'test'}});
  expect(department.value).toBe('test');
});

test('check if user can enter Phone Number input', () => {
  render(<Main />);
  const phone = screen.getByPlaceholderText("222-222-2222");
  fireEvent.change(phone, {target: {value: 'test'}});
  expect(phone.value).toBe('test');
});

test('check if user can enter Email input', () => {
  render(<Main />);
  const myEmail = screen.getByPlaceholderText("ucsc@ucsc.edu");
  fireEvent.change(myEmail, {target: {value: 'test'}});
  expect(myEmail.value).toBe('test');
});

test('upload file', () => {
  const file = new File(['test'], 'test.png', {type: 'image/png'});
  render(<Main />);
  const input = screen.getByLabelText(/Photo Upload/i);
  expect(input.value).toBe("");
});

// The following tests check if the design buttons can be selected:

test('check if design 1 is selectable', () => {
  render(<Main />);
  const des1 = document.querySelector('#design1');
  fireEvent.click(des1);
  const name = screen.getByText('First Last');
  expect(name).toBeInTheDocument();
});

test('check if design 2 is selectable', () => {
  render(<Main />);
  const des2 = document.querySelector('#design2');
  fireEvent.click(des2);
  const name = screen.getByText('First Last');
  expect(name).toBeInTheDocument();
});

test('check if design 3 is selectable', () => {
  render(<Main />);
  const des3 = document.querySelector('#design3');
  fireEvent.click(des3);
  const name = screen.getByText('First Last');
  expect(name).toBeInTheDocument();
});

// The following tests check if simple inputs are rendered in designs 1-3:

// This trio of tests checks if the title appears:

test('check if title input appears in design 1', () => {
  render(<Main />);
  const title = screen.getByPlaceholderText("Student");
  fireEvent.change(title, {target: {value: 'test'}});
  expect(title.value).toBe('test');
  const des1 = document.querySelector('#design1');
  fireEvent.click(des1);
  const name = screen.getByText('test');
  expect(name).toBeInTheDocument();
});

test('check if title input appears in design 2', () => {
  render(<Main />);
  const title = screen.getByPlaceholderText("Student");
  fireEvent.change(title, {target: {value: 'test'}});
  expect(title.value).toBe('test');
  const des2 = document.querySelector('#design2');
  fireEvent.click(des2);
  const name = screen.getByText('test');
  expect(name).toBeInTheDocument();
});

test('check if title input appears in design 3', () => {
  render(<Main />);
  const title = screen.getByPlaceholderText("Student");
  fireEvent.change(title, {target: {value: 'test'}});
  expect(title.value).toBe('test');
  const des3 = document.querySelector('#design3');
  fireEvent.click(des3);
  const name = screen.getByText('test');
  expect(name).toBeInTheDocument();
});

// This trio of tests checks if the major appears:

test('check if major input appears in design 1', () => {
  render(<Main />);
  const title = screen.getByPlaceholderText("Computer Science");
  fireEvent.change(title, {target: {value: 'test'}});
  expect(title.value).toBe('test');
  const des1 = document.querySelector('#design1');
  fireEvent.click(des1);
  const name = screen.getByText('test');
  expect(name).toBeInTheDocument();
});

test('check if major input appears in design 2', () => {
  render(<Main />);
  const title = screen.getByPlaceholderText("Computer Science");
  fireEvent.change(title, {target: {value: 'test'}});
  expect(title.value).toBe('test');
  const des1 = document.querySelector('#design2');
  fireEvent.click(des1);
  const name = screen.getByText('test');
  expect(name).toBeInTheDocument();
});

test('check if major input appears in design 3', () => {
  render(<Main />);
  const title = screen.getByPlaceholderText("Computer Science");
  fireEvent.change(title, {target: {value: 'test'}});
  expect(title.value).toBe('test');
  const des1 = document.querySelector('#design3');
  fireEvent.click(des1);
  const name = screen.getByText('test');
  expect(name).toBeInTheDocument();
});

// This trio of tests checks if the name appears:

test('check if name input appears in design 1', () => {
  render(<Main />);
  const title = screen.getByPlaceholderText("Jane Doe");
  fireEvent.change(title, {target: {value: 'test'}});
  expect(title.value).toBe('test');
  const des1 = document.querySelector('#design1');
  fireEvent.click(des1);
  const name = screen.getByText('test');
  expect(name).toBeInTheDocument();
});

test('check if name input appears in design 2', () => {
  render(<Main />);
  const title = screen.getByPlaceholderText("Jane Doe");
  fireEvent.change(title, {target: {value: 'test'}});
  expect(title.value).toBe('test');
  const des2 = document.querySelector('#design2');
  fireEvent.click(des2);
  const name = screen.getByText('test');
  expect(name).toBeInTheDocument();
});

test('check if name input appears in design 3', () => {
  render(<Main />);
  const title = screen.getByPlaceholderText("Jane Doe");
  fireEvent.change(title, {target: {value: 'test'}});
  expect(title.value).toBe('test');
  const des1 = document.querySelector('#design3');
  fireEvent.click(des1);
  const name = screen.getByText('test');
  expect(name).toBeInTheDocument();
});

// This trio of tests checks if the year appears:

test('check if year input appears in design 1', () => {
  render(<Main />);
  const title = screen.getByPlaceholderText("2022");
  fireEvent.change(title, {target: {value: 'test'}});
  expect(title.value).toBe('test');
  const des1 = document.querySelector('#design1');
  fireEvent.click(des1);
  const name = screen.getByText('test');
  expect(name).toBeInTheDocument();
});

test('check if year input appears in design 2', () => {
  render(<Main />);
  const title = screen.getByPlaceholderText("2022");
  fireEvent.change(title, {target: {value: 'test'}});
  expect(title.value).toBe('test');
  const des1 = document.querySelector('#design2');
  fireEvent.click(des1);
  const name = screen.getByText('test');
  expect(name).toBeInTheDocument();
});

test('check if year input appears in design 3', () => {
  render(<Main />);
  const title = screen.getByPlaceholderText("2022");
  fireEvent.change(title, {target: {value: 'test'}});
  expect(title.value).toBe('test');
  const des1 = document.querySelector('#design3');
  fireEvent.click(des1);
  const name = screen.getByText('test');
  expect(name).toBeInTheDocument();
});

// This trio of tests checks if the email appears:

test('check if email input appears in design 1', () => {
  render(<Main />);
  const title = screen.getByPlaceholderText("ucsc@ucsc.edu");
  fireEvent.change(title, {target: {value: 'test'}});
  expect(title.value).toBe('test');
  const des1 = document.querySelector('#design1');
  fireEvent.click(des1);
  const name = screen.getByText('test');
  expect(name).toBeInTheDocument();
});

test('check if email input appears in design 2', () => {
  render(<Main />);
  const title = screen.getByPlaceholderText("ucsc@ucsc.edu");
  fireEvent.change(title, {target: {value: 'test'}});
  expect(title.value).toBe('test');
  const des1 = document.querySelector('#design2');
  fireEvent.click(des1);
  const name = screen.getByText('test');
  expect(name).toBeInTheDocument();
});

test('check if email input appears in design 3', () => {
  render(<Main />);
  const title = screen.getByPlaceholderText("ucsc@ucsc.edu");
  fireEvent.change(title, {target: {value: 'test'}});
  expect(title.value).toBe('test');
  const des1 = document.querySelector('#design3');
  fireEvent.click(des1);
  const name = screen.getByText('test');
  expect(name).toBeInTheDocument();
});

// This trio of tests checks if the phone number appears:

test('check if phone input appears in design 1', () => {
  render(<Main />);
  const title = screen.getByPlaceholderText("222-222-2222");
  fireEvent.change(title, {target: {value: 'test'}});
  expect(title.value).toBe('test');
  const des1 = document.querySelector('#design1');
  fireEvent.click(des1);
  const name = screen.getByText('test');
  expect(name).toBeInTheDocument();
});

test('check if phone input appears in design 2', () => {
  render(<Main />);
  const title = screen.getByPlaceholderText("222-222-2222");
  fireEvent.change(title, {target: {value: 'test'}});
  expect(title.value).toBe('test');
  const des1 = document.querySelector('#design2');
  fireEvent.click(des1);
  const name = screen.getByText('test');
  expect(name).toBeInTheDocument();
});

test('check if phone input appears in design 3', () => {
  render(<Main />);
  const title = screen.getByPlaceholderText("222-222-2222");
  fireEvent.change(title, {target: {value: 'test'}});
  expect(title.value).toBe('test');
  const des1 = document.querySelector('#design3');
  fireEvent.click(des1);
  const name = screen.getByText('test');
  expect(name).toBeInTheDocument();
});

// These tests check if more complex combinations of inputs appear:

test('check if title and major in design 1', () => {
  render(<Main />);
  const title = screen.getByPlaceholderText("Student");
  const major = screen.getByPlaceholderText("Computer Science");
  fireEvent.change(title, {target: {value: 'test'}});
  fireEvent.change(major, {target: {value: 'test2'}});
  expect(title.value).toBe('test');
  expect(major.value).toBe('test2');
  const des2 = document.querySelector('#design2');
  fireEvent.click(des2);
  const tval = screen.getByText('test');
  expect(tval).toBeInTheDocument();
  const mval = screen.getByText('test2');
  expect(mval).toBeInTheDocument();
});

test('check if year and major are in design 3', () => {
  render(<Main />);
  const major = screen.getByPlaceholderText("Computer Science");
  const year = screen.getByPlaceholderText("2022");
  fireEvent.change(year, {target: {value: 'y'}});
  fireEvent.change(major, {target: {value: 'm'}});
  expect(major.value).toBe('m');
  expect(year.value).toBe('y');
  const des2 = document.querySelector('#design3');
  fireEvent.click(des2);
  const name = screen.getByText('m, y');
  expect(name).toBeInTheDocument();
});

test('check if year and major are in design 1', () => {
  render(<Main />);
  const major = screen.getByPlaceholderText("Computer Science");
  const year = screen.getByPlaceholderText("2022");
  fireEvent.change(year, {target: {value: 'y'}});
  fireEvent.change(major, {target: {value: 'm'}});
  expect(major.value).toBe('m');
  expect(year.value).toBe('y');
  const des2 = document.querySelector('#design1');
  fireEvent.click(des2);
  const name = screen.getByText('m - y');
  expect(name).toBeInTheDocument();
});

test('check if department and title are in design 3', () => {
  render(<Main />);
  const title = screen.getByPlaceholderText("Student");
  const department = screen.getByPlaceholderText("Baskin Engineering");
  fireEvent.change(title, {target: {value: 't'}});
  fireEvent.change(department, {target: {value: 'd'}});
  const des2 = document.querySelector('#design3');
  fireEvent.click(des2);
  const name = screen.getByText('t, d');
  expect(name).toBeInTheDocument();
});

test('check if design 3 is selectable', () => {
  render(<Main />);
  const des3 = document.querySelector('#design3');
  fireEvent.click(des3);
  const name = screen.getByText('First Last');
  expect(name).toBeInTheDocument();
});

test('check if final design is downloaded/copied correctly', () => {
  render(<Main />);
  const downloadBt = screen.getByText('Download');
  const photoUpload = screen.getByText('Photo Upload');
  const copyBt = screen.getByText('Copy');
  expect(downloadBt).toBeInTheDocument();
  expect(photoUpload).toBeInTheDocument();
  expect(copyBt).toBeInTheDocument();
});

// =============================================================================//

// System tests

// Sprint 2:

test('System test - Sprint 2', () => {
    render(<Main />);
    const name = screen.getByPlaceholderText("Jane Doe");
    fireEvent.change(name, {target: {value: 'test'}});
    expect(name.value).toBe('test');
    const title = screen.getByPlaceholderText("Student");
    fireEvent.change(title, {target: {value: 'test'}});
    expect(title.value).toBe('test');
    const major = screen.getByPlaceholderText("Computer Science");
    fireEvent.change(major, {target: {value: 'test'}});
    expect(major.value).toBe('test');
    const year = screen.getByPlaceholderText("2022");
    fireEvent.change(year, {target: {value: 'test'}});
    expect(year.value).toBe('test');
    const affCollege = screen.getByPlaceholderText("Stevenson College");
    fireEvent.change(affCollege, {target: {value: 'test'}});
    expect(affCollege.value).toBe('test');
    const department = screen.getByPlaceholderText("Baskin Engineering");
    fireEvent.change(department, {target: {value: 'test'}});
    expect(department.value).toBe('test');
    const phone = screen.getByPlaceholderText("222-222-2222");
    fireEvent.change(phone, {target: {value: 'test'}});
    expect(phone.value).toBe('test');
    const myEmail = screen.getByPlaceholderText("ucsc@ucsc.edu");
    fireEvent.change(myEmail, {target: {value: 'test'}});
    expect(myEmail.value).toBe('test');
    const input = screen.getByLabelText(/Photo Upload/i);
    expect(input.value).toBe("");
});

// ======================================================================= //

// Sprint 3:

test('System test - Sprint 3', () => {
    render(<Main />);
    let des1 = document.querySelector('#design1');
    fireEvent.click(des1);
    let name = screen.getByText('First Last');
    expect(name).toBeInTheDocument();
    let des2 = document.querySelector('#design2');
    fireEvent.click(des2);
    let name2 = screen.getByText('First Last');
    expect(name2).toBeInTheDocument();
    let des3 = document.querySelector('#design3');
    fireEvent.click(des3);
    name = screen.getByText('First Last');
    expect(name).toBeInTheDocument();
    let title = screen.getByPlaceholderText("Student");
    let major = screen.getByPlaceholderText("Computer Science");
    fireEvent.change(title, {target: {value: 'test'}});
    fireEvent.change(major, {target: {value: 'test2'}});
    expect(title.value).toBe('test');
    expect(major.value).toBe('test2');
    des2 = document.querySelector('#design2');
    fireEvent.click(des2);
    let tval = screen.getByText('test');
    expect(tval).toBeInTheDocument();
    let mval = screen.getByText('test2');
    expect(mval).toBeInTheDocument();
    major = screen.getByPlaceholderText("Computer Science");
    let year = screen.getByPlaceholderText("2022");
    fireEvent.change(year, {target: {value: 'y'}});
    fireEvent.change(major, {target: {value: 'm'}});
    expect(major.value).toBe('m');
    expect(year.value).toBe('y');
    des2 = document.querySelector('#design3');
    fireEvent.click(des2);
    name = screen.getByText('m, y');
    expect(name).toBeInTheDocument();
    major = screen.getByPlaceholderText("Computer Science");
    year = screen.getByPlaceholderText("2022");
    fireEvent.change(year, {target: {value: 'y'}});
    fireEvent.change(major, {target: {value: 'm'}});
    expect(major.value).toBe('m');
    expect(year.value).toBe('y');
    des2 = document.querySelector('#design1');
    fireEvent.click(des2);
    name = screen.getByText('m - y');
    expect(name).toBeInTheDocument();
    title = screen.getByPlaceholderText("Student");
    let department = screen.getByPlaceholderText("Baskin Engineering");
    fireEvent.change(title, {target: {value: 't'}});
    fireEvent.change(department, {target: {value: 'd'}});
    des2 = document.querySelector('#design3');
    fireEvent.click(des2);
    name = screen.getByText('t, d');
    expect(name).toBeInTheDocument();
    des3 = document.querySelector('#design3');
    fireEvent.click(des3);
    name = screen.getByText('First Last');
    expect(name).toBeInTheDocument();
    let downloadBt = screen.getByText('Download');
    let photoUpload = screen.getByText('Photo Upload');
    let copyBt = screen.getByText('Copy');
    expect(downloadBt).toBeInTheDocument();
    expect(photoUpload).toBeInTheDocument();
    expect(copyBt).toBeInTheDocument();
});

// ======================================================================= //

// Sprint 4:

test('check if download/copy buttons are rendered', () => {
  render(<Main />);
  const downloadBt = screen.getByText('Download');
  const photoUpload = screen.getByText('Photo Upload');
  const copyBt = screen.getByText('Copy');
  expect(downloadBt).toBeInTheDocument();
  expect(photoUpload).toBeInTheDocument();
  expect(copyBt).toBeInTheDocument();
});
