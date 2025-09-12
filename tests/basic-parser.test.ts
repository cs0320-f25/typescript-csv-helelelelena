import { parseCSV } from "../src/basic-parser";
import * as path from "path";
import { PersonRowSchema } from "../src/basic-parser";
import { ClassSchema } from "../src/basic-parser";

const PEOPLE_CSV_PATH = path.join(__dirname, "../data/people.csv");
const NO_HEADER = path.join(__dirname, "../data/noheader.csv");
const CLASSES = path.join(__dirname, "../data/classes.csv");


test("parseCSV yields arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH, PersonRowSchema, true)
  console.log(results)
  
  expect(results).toHaveLength(5);
  expect(results[0]).toEqual(["name", "age"]); // header!
  expect(results[1]).toEqual(["Alice", "23"]);
  expect(results[2]).toEqual(["Bob", "thirty"]); 
  expect(results[3]).toEqual(["Charlie", "25"]);
  expect(results[4]).toEqual(["Nim", "22"]);
});


test("parseCSV yields only arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH, PersonRowSchema, true)
  for(const row of results) {
    expect(Array.isArray(row)).toBe(true);
  }
});

test("parseCSV yields only strings for position 0", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH, PersonRowSchema, true)
  expect(typeof results[0].name).toBe("string");
  expect(typeof results[1].name).toBe("string");
  expect(typeof results[2].name).toBe("string");
  expect(typeof results[3].name).toBe("string");
  expect(typeof results[4].name).toBe("string");
})

test("parseCSV yields only ints for position 1", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH, PersonRowSchema, true)
  for (const row of results) {
    expect(Number.isInteger(Number(row.age))).toBe(true)
  }
})

test("parseCSV identifies header", async () => {
  const results_header = await parseCSV(CLASSES, ClassSchema, true)
  const results_no_header = await parseCSV(NO_HEADER, ClassSchema, false)

  expect(results_header).toHaveLength(5);
  expect(results_no_header).toHaveLength(5);
});

test("parseCSV parses quoted commas correctly", async () => {
  const results = await parseCSV(NO_HEADER, ClassSchema, false);
  expect(results[1].instructor).toBe("Nelson, Tim");
});

test("parseCSV parses quoted newlines correctly", async () => {
  const results = await parseCSV(NO_HEADER, ClassSchema, false);
  expect(results[2].instructor).toBe("Nelson,\nTim");
});

test("parseCSV parses quotes inside fields correctly", async () => {
  const results = await parseCSV(NO_HEADER, ClassSchema, false);
  expect(results[1].comment).toBe('he said "good"');
});


