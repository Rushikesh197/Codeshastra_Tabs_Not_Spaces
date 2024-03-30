
--@block
SELECT * FROM pg_catalog.pg_tables where SCHEMANAME = 'public';

--@block
SELECT * from asset_pricing1 where ticker_id like 'ETH';

--@block
INSERT INTO asset(ticker,category,name,description) values('REL','MULTI','Reliance','This is Reliance Industry ');

--@block 
ALTER TABLE asset 
ADD PRIMARY KEY (ID);

--@block 
-- SET  FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE asset CASCADE;

--@block
INSERT INTO asset_pricing1(ticket,market_traded,timestamp1,market_value,currency) values('REL','BSE','2023-11-08 09:23:15',69,'INR');

--@block
SELECT * from asset_pricing;


--@block
Create DATABASE pmp;
Create DATABASE pmp2;


--@block
CREATE TABLE asset_pricing1 (
    Ticket text NOT NULL,
    Market_Traded text NOT NULL,
    market_value decimal NOT NULL,
    timestamp1 timestamptz NOT NULL,
    currency text NOT NULL,
    PRIMARY KEY (Ticket, Market_Traded,timestamp1)
);
--@block
ALTER TABLE asset_pricing1
ADD CONSTRAINT fk_asset_ticker
FOREIGN KEY (ticket)
REFERENCES Asset (Ticker);
SELECT create_hypertable('asset_pricing1', 'timestamp1');


--@block
-- Create the portfolio table
CREATE TABLE portfolio (
    UUID INT NOT NULL REFERENCES Users(UUID),
    transaction_id INT NOT NULL REFERENCES transaction(transaction_id),
    Ticker TEXT NOT NULL REFERENCES Asset(Ticker),
    current_ticker_value DECIMAL NOT NULL,
    invested_ticker_value DECIMAL NOT NULL,
    quantity DECIMAL NOT NULL,
    invested_value DECIMAL NOT NULL,
    current_value DECIMAL NOT NULL,
    percentage_change DECIMAL NOT NULL,
    timestamp3 TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
    currency DECIMAL NOT NULL,
    PRIMARY KEY (Ticker, UUID, transaction_id, timestamp3)  -- Include timestamp3 in the primary key
);

-- Convert the table into a hypertable
SELECT create_hypertable('portfolio', 'timestamp3');

--@block
drop table portfolio;


--@block
CREATE DATABASE questionaire


--@block
select * from django_migrations 

--@block
delete from django_migrations where id=7;

--@block
DROP DATABASE pmp1;

--@block
INSERT INTO asset (ticker, category, name, description)
VALUES
('AAPL', 'Tech', 'AppleInc.', 'Designs smartphones and computers.'),
('GOOGL', 'Tech', 'AlphabetInc.', 'Provides online advertising.'),
('MSFT', 'Tech', 'MicrosoftCorp', 'Develops software products.'),
('AMZN', 'Retail', 'AmazonInc.', 'Operates online retail.'),
('FB', 'Tech', 'MetaPlatforms', 'Operates social network.'),
('TSLA', 'Auto', 'TeslaInc.', 'Manufactures electric vehicles.'),
('JPM', 'Finance', 'JPMorgan', 'Provides financial services.'),
('BRK.A', 'Finance', 'Berkshire', 'Holding company.'),
('V', 'Finance', 'VisaInc.', 'Facilitates transactions.'),
('JNJ', 'Health', 'Johnson&Johnson', 'Manufactures healthcare.'),
('WMT', 'Retail', 'WalmartInc.', 'Operates retail stores.'),
('PG', 'ConsumerGoods', 'ProcterGamble', 'Manufactures goods.'),
('NVDA', 'Tech', 'NVIDIAInc.', 'Designs GPUs.'),
('INTC', 'Tech', 'IntelCorp', 'Manufactures chips.'),
('CRM', 'Tech', 'Salesforce', 'Provides CRM software.'),
('T', 'Telecom', 'AT&TInc.', 'Provides telecom services.'),
('XOM', 'Energy', 'ExxonMobil', 'Engages in oil exploration.'),
('CSCO', 'Tech', 'CiscoSystems', 'Sells networking tech.'),
('KO', 'Beverage', 'Coca-Cola', 'Manufactures beverages.'),
('NFLX', 'Tech', 'NetflixInc.', 'Provides streaming.'),
('BA', 'Aero', 'Boeing', 'Designs aircraft.'),
('PEP', 'Beverage', 'PepsiCo', 'Manufactures snacks.'),
('UNH', 'Health', 'UnitedHealth', 'Provides healthcare.'),
('HD', 'Retail', 'HomeDepot', 'Operates stores.'),
('VZ', 'Telecom', 'VerizonInc.', 'Provides telecom.'),
('DIS', 'Entertain', 'Walt', 'Operates resorts.'),
('MRK', 'Health', 'Merck', 'Sells pharmaceuticals.'),
('CVX', 'Energy', 'Chevron', 'Engages in oil.'),
('GS', 'Finance', 'GoldmanSachs', 'Provides banking.'),
('COST', 'Retail', 'Costco', 'Operates stores.');

--@block
SELECT * FROM asset;

--@block
