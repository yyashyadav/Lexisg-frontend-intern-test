## Screenshot
<img width="1680" alt="Screenshot 2025-07-09 at 12 10 14 AM" src="https://github.com/user-attachments/assets/5e82cdbe-1da7-44f3-88a0-f23cfe72bb1d" />

## DEMO


https://github.com/user-attachments/assets/3227d1aa-5507-4568-b222-7b75813fa987



# Lexi Legal Assistant Frontend 

Lexi Legal Assistant is a simple web application that simulates a legal research chat experience. The interface is designed to be clean, modern, and easy to use, with a focus on clarity and professionalism.

## How to Run the Project

To get started with the Lexi Legal Assistant frontend, follow these steps:

1. Open a terminal and navigate to the `lexis-frontend` directory:
   ```bash
   cd lexis-frontend
   ```
2. Install the project dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
   Alternatively, you can use:
   ```bash
   npm run dev
   ```
   The application will be available at [http://localhost:5173](http://localhost:5173) by default.

## Citation Linking

Citations in the chat responses are interactive and designed to help users quickly access referenced legal documents. Here’s how citation linking is handled in this project:

- **Citation Text:** The citation text shown below each answer .
- **Download Button:** There is also a "Download Judgment PDF" button below each citation, which provides another way to open the PDF.

- **User Guidance:** A note is shown below the citation, reminding users to scroll to and review the relevant paragraph in the PDF themselves.

This approach ensures that users are guided to the correct part of the document, even though direct PDF manipulation is not possible in a browser environment.
