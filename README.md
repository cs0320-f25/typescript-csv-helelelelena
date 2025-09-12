# Sprint 1: TypeScript CSV

### Task C: Proposing Enhancement

- #### Step 1: Brainstorm on your own.
    Send a message to the user if they for some reason submit the wrong file // no file
    Potentially use not only comma, but other values as separators
    Handle different value types 
    Quotes within quotes 
    "\n" inside rows instead of as separators

- #### Step 2: Use an LLM to help expand your perspective.
    empty field and missing fields: ,, or undefined/null?
    headers
    If one row has more or fewer fields than the header, does the parser crash, skip, or try to fix it?
    Can the parser handle very large CSVs without loading everything into memory at once?
    If parsing fails, do I get a helpful error message with line number & column?
    Can I stop after the first N rows (like for preview)?

- #### Step 3: use an LLM to help expand your perspective.

    Include a list of the top 4 enhancements or edge cases you think are most valuable to explore in the next week’s sprint. Label them clearly by category (extensibility vs. functionality), and include whether they came from you, the LLM, or both. Describe these using the User Story format—see below for a definition. 

    Include your notes from above: what were your initial ideas, what did the LLM suggest, and how did the results differ by prompt? What resonated with you, and what didn’t? (3-5 sentences.) 

    Quote handling (me):
    As a user parsing CSVs, I want the parser to correctly handle quoted fields, so that values like "He said ""hello""" are returned as He said "hello", and data isn’t misparsed or corrupted.
    Useful error messages (both):
    As a user, I want the parser to return detailed error messages and include, for example, the line and column where parsing failed, so that it is easier for me to correct these issues
    Transform types (me):
    As a user, I want the parser to transform types, for example "3" should become an integer, so that I don't need to manually map data after the parsing.
    Row mismatch (LLM):
    As a user, I want the parser to detect when a row has more or fewer fields than the header, so that I can choose what action to take (fail, pad with null, log a warning etc.) to ensure data consistency.


### Design Choices

### 1340 Supplement

- #### 1. Correctness

- #### 2. Random, On-Demand Generation

- #### 3. Overall experience, Bugs encountered and resolved
#### Errors/Bugs:
#### Tests:
#### How To…

#### Team members and contributions (include cs logins):

#### Collaborators (cslogins of anyone you worked with on this project and/or generative AI):
#### Total estimated time it took to complete project:
#### Link to GitHub Repo:  
