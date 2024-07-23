import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const styles = {
  card: {
    backgroundColor: '#333', // Dark background for contrast
    color: '#c6a367', // Gold text color
    border: '1px solid #c6a367',
  },
  buttonDetails: {
    backgroundColor: '#c6a367', // Gold button background
    color: '#fff',
    marginTop: '10px',
  }
};

const FinancialReportList = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('http://localhost:5039/api/financialreports');
        setReports(result.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleViewDetails = (report) => {
    setSelectedReport(report);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedReport(null);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Financial Reports
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Alert severity="error">Error fetching data: {error.message}</Alert>
      ) : (
        <Grid container spacing={3}>
          {reports.map((report) => (
            <Grid item xs={12} sm={6} md={4} key={report.id}>
              <Card style={styles.card}>
                <CardContent>
                  <Typography variant="h6">{report.reportName}</Typography>
                  <Typography variant="body1">Amount: ${report.amount}</Typography>
                  <Typography variant="body1">Date: {new Date(report.reportDate).toLocaleDateString()}</Typography>
                  <Button
                    variant="contained"
                    style={styles.buttonDetails}
                    onClick={() => handleViewDetails(report)}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
      <Dialog open={open} onClose={handleClose} aria-labelledby="report-details-dialog-title">
        <DialogTitle id="report-details-dialog-title">Report Details</DialogTitle>
        <DialogContent>
          {selectedReport && (
            <>
              <Typography variant="h6">Name: {selectedReport.reportName}</Typography>
              <Typography variant="body1">Amount: ${selectedReport.amount}</Typography>
              <Typography variant="body1">Date: {new Date(selectedReport.reportDate).toLocaleDateString()}</Typography>
              {/* Add more fields as needed */}
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default FinancialReportList;
