import { Typography, Card, CardContent, Box } from '@mui/material';
import { markdownify } from "@lib/utils/textConverter";

function Faq({ data }) {
  const { frontmatter } = data;
  const { title, faqs } = frontmatter;
  return (
    <section className="section">
      <div className="container">
        <Typography variant="h2" align="center" gutterBottom>
          {title}
        </Typography>
        <div className="section row  -mt-6">
          {faqs.map((faq, index) => (
            <div key={index} className="col-12 mt-6 md:col-6">
              <Box sx={{ boxShadow: '0 0 10px rgba(0, 0, 0, 1)', borderRadius: '16px' }}>
                <Card variant="outlined" className="p-12 shadow  dark:bg-zinc-300" sx={{ borderRadius: 'inherit' }}>
                  <CardContent>
                    <Typography variant="h4" className="faq-head relative">
                      {faq.title}
                    </Typography>
                    <Typography variant="body1" className="faq-body mt-4">
                      {markdownify(faq.answer, "p", "faq-body mt-4")}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
