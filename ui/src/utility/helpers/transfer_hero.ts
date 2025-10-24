import { Transaction } from "@mysten/sui/transactions";

export const transferHero = (heroId: string, to: string) => {
  const tx = new Transaction();
  
  // ... (yorumlarınız)
  
  tx.transferObjects(
    [tx.object(heroId)],
    to
  );
    
  // Fazladan parantez buradan kaldırıldı

  return tx;
};