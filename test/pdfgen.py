from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph

def generate_pdf(filename):
    # Create a PDF document
    doc = SimpleDocTemplate(filename, pagesize=letter)

    # Set title style
    styles = getSampleStyleSheet()
    title_style = styles["Title"]
    title_style.fontName = "Helvetica"
    title_style.alignment = 1  # Center alignment

    # Add title
    title = "Sample PDF Generated with Python"
    doc_title = Paragraph(title, title_style)

    # Build the document content
    content = [doc_title]

    # Add more content here if needed

    # Add content to the document
    doc.build(content)

if __name__ == "__main__":
    filename = "centered_title.pdf"
    generate_pdf(filename)
    print(f"PDF generated successfully: {filename}")
