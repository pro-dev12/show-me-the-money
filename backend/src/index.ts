import express from 'express';
import cors from 'cors';
import balanceSheetRoutes from './routes/balanceSheet';

const app = express();
const PORT = 5000;

app.use(cors());

app.use(express.json());

app.use('/api/balance-sheet', balanceSheetRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;