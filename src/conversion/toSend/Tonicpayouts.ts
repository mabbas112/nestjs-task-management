import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tonicpayouts', { schema: 'toptq_dev' })
export class Tonicpayouts {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'report_date', nullable: true, length: 50 })
  reportDate: string | null;

  @Column('decimal', {
    name: 'campagin_num',
    nullable: true,
    precision: 6,
    scale: 0,
  })
  campaginNum: string | null;

  @Column('varchar', { name: 'network_ID', nullable: true, length: 50 })
  networkId: string | null;

  @Column('varchar', { name: 'Transaction_ID', nullable: true, length: 255 })
  transactionId: string | null;

  @Column('decimal', {
    name: 'Revenue',
    nullable: true,
    precision: 6,
    scale: 2,
  })
  revenue: string | null;

  @Column('varchar', { name: 'Click_ID', nullable: true, length: 255 })
  clickId: string | null;

  @Column('varchar', { name: 'campaign_title', nullable: true, length: 50 })
  campaignTitle: string | null;

  @Column('varchar', { name: 'site_name', nullable: true, length: 255 })
  siteName: string | null;

  @Column('varchar', { name: 'ad_title', nullable: true, length: 255 })
  adTitle: string | null;

  @Column('varchar', { name: 'keyword', nullable: true, length: 50 })
  keyword: string | null;

  @Column('timestamp', {
    name: 'Payout_Timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  payoutTimestamp: Date;

  @Column('varchar', { name: 'ad_type', nullable: true, length: 50 })
  adType: string | null;

  @Column('varchar', { name: 'advertisier', nullable: true, length: 50 })
  advertisier: string | null;

  @Column('varchar', { name: 'template', nullable: true, length: 50 })
  template: string | null;

  @Column('varchar', { name: 'date', nullable: true, length: 50 })
  date: string | null;

  @Column('int', { name: 'campaign_id', nullable: true })
  campaignId: number | null;

  @Column('varchar', { name: 'campaign_name', nullable: true, length: 64 })
  campaignName: string | null;

  @Column('int', { name: 'clicks', nullable: true })
  clicks: number | null;

  @Column('decimal', { name: 'revenueUsd', nullable: true, precision: 22 })
  revenueUsd: number | null;
 
  @Column('varchar', { name: 'subid1', nullable: true, length: 50 })
  subid1: string | null;

  @Column('varchar', { name: 'subid2', nullable: true, length: 50 })
  subid2: string | null;

  @Column('varchar', { name: 'subid3', nullable: true, length: 128 })
  subid3: string | null;

  @Column('varchar', { name: 'subid4', nullable: true, length: 128 })
  subid4: string | null;

  @Column('varchar', { name: 'timestamp', nullable: true, length: 50 })
  timestamp: string | null;

  @Column('varchar', { name: 'adtype', nullable: true, length: 50 })
  adtype: string | null;

  @Column('varchar', { name: 'advertiser', nullable: true, length: 50 })
  advertiser: string | null;
}
