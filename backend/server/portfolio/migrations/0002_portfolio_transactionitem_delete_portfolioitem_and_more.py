# Generated by Django 4.2.5 on 2024-01-26 10:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('assets', '__first__'),
        ('pmp_user', '0001_initial'),
        ('portfolio', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Portfolio',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.IntegerField()),
                ('buy_price', models.FloatField(blank=True, null=True)),
                ('sell_price', models.FloatField(blank=True, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('portfolio_asset_v1', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='portfolio_asset_v1', to='assets.asset')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='portfolio_user_v1', to='pmp_user.pmp_user')),
            ],
            options={
                'db_table': 'portfolios',
            },
        ),
        migrations.CreateModel(
            name='TransactionItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.IntegerField()),
                ('buy_price', models.FloatField(blank=True, null=True)),
                ('sell_price', models.FloatField(blank=True, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('transaction_asset', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='transaction_asset', to='assets.asset')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='transaction_user', to='pmp_user.pmp_user')),
            ],
            options={
                'db_table': 'transaction_items',
            },
        ),
        migrations.DeleteModel(
            name='PortfolioItem',
        ),
        migrations.AddIndex(
            model_name='portfolio',
            index=models.Index(models.F('user'), models.F('portfolio_asset_v1'), name='user_portfolio_idx'),
        ),
    ]
