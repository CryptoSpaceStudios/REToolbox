import { Typography, Card, CardContent, Box } from '@mui/material';
import { markdownify } from "@lib/utils/textConverter";

function Privacy({ data }) {
  const { frontmatter } = data;
  const { title, heading, privacies } = frontmatter;
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
        <div className="section row -mt-6">
          {privacies.map((privacypolicy, index) => (
            <div key={index} className="col-12 mt-6 md:col-6">
              <Box sx={{ boxShadow: '0 0 10px rgba(0, 0, 0, 1)', borderRadius: '16px' }}>
                <Card variant="outlined" className="p-12 shadow" sx={{ borderRadius: 'inherit' }}>
                  <CardContent>
                    <Typography variant="h4" className="faq-head relative">
                      {privacypolicy.title}
                    </Typography>
                    <Typography variant="body1" className="faq-body mt-4">
                      {markdownify(privacypolicy.answer, "p", "faq-body mt-4")}
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

export default Privacy;
