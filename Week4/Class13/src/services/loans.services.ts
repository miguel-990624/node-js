/*import { type ILoan } from "../interfaces/loans.interface.ts";
import { promises as fs } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const filepath = join(__dirname, "../models/loans.json");

const getLoansService = async (): Promise<ILoan[]> => {
    const data = await fs.readFile(filepath, "utf-8");
    return JSON.parse(data) as ILoan[];
};

const getLoansByIDService = async (id:number): Promise<ILoan | null> => {
    const loans = await getLoansService();
    const loan = loans.find( l => l.id === id );
    return loan || null;
};

const postLoansService = async ( newLoan: ILoan ): Promise<ILoan> => {
    const loans = await getLoansService();
    loans.push(newLoan);
    await fs.writeFile(filepath, JSON.stringify(loans, null, 4), "utf-8");
    return newLoan;
};

const putLoansService = async ( id:number, updatedLoan: Partial<ILoan> ): Promise<ILoan | null> => {
    const loans = await getLoansService();
    const index = loans.findIndex( l => l.id === id);
    if ( index === -1 ) {
        return null;
    }
    loans[index] = { ...loans[index], ...updatedLoan, id} as ILoan;
    await fs.writeFile(filepath, JSON.stringify(loans, null, 4), "utf-8");
    return loans[index];
}

const deleteLoansService = async (id:number): Promise<boolean> => {
    const loans = await getLoansService();
    const index = loans.findIndex( l => l.id === id);
    if ( index === -1 ) {
        return false;
    }
    loans.splice(index, 1);
    await fs.writeFile(filepath, JSON.stringify(loans, null, 4), "utf-8");
    return true;
};

export { getLoansService, getLoansByIDService, postLoansService, putLoansService, deleteLoansService };*/

import { Loan } from "../models/index.models.ts";
import type { LoanCreation } from "../models/loans.models.ts";

const getLoansService = async () => {
  return Loan.findAll();
};

const getLoansByIDService = async (id: number) => {
  return Loan.findByPk(id);
};

const postLoansService = async (newLoan: LoanCreation) => {
  return Loan.create(newLoan);
};

const putLoansService = async (id: number, updatedBook: Partial<LoanCreation>) => {
  const book = await Loan.findByPk(id);
  if (!book) return null;
  return book.update(updatedBook);
};

const deleteLoansService = async (id: number) => {
  const deleted = await Loan.destroy({ where: { id } });
  return deleted > 0;
};

export { getLoansService, getLoansByIDService, postLoansService, putLoansService, deleteLoansService };