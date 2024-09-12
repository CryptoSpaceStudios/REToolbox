import { Typography, Card, CardContent, Box } from '@mui/material';
import { markdownify } from "@lib/utils/textConverter";

function Faq({ data }) {
  const { frontmatter } = data;
  const { title, heading, faqs } = frontmatter;
  return (
    <section className="section">
      <div className="container">
        <div className="mb-6">
          <Typography variant="h2" align="center" gutterBottom>
            {title}
          </Typography>
        </div>
        <div className="mt-6">
          <Typography variant="h3" align="center" gutterBottom>
            {heading}
          </Typography>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {faqs.map((faq, index) => (
            <Box key={index} sx={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', borderRadius: '16px' }}>
              <Card variant="outlined" className="p-12 shadow" sx={{ borderRadius: 'inherit' }}>
                <CardContent>
                  <Typography variant="h4" className="faq-head relative">
                    {faq.question}
                  </Typography>
                  <Typography variant="body1" className="faq-body mt-4">
                    {markdownify(faq.answer, "p", "faq-body mt-4")}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
