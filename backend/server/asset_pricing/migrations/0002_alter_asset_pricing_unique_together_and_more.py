# Generated by Django 4.2.5 on 2024-02-29 18:55

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('assets', '0001_initial'),
        ('asset_pricing', '0001_initial'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='asset_pricing',
            unique_together=set(),
        ),
        migrations.AddField(
            model_name='asset_pricing',
            name='ticker',
            field=models.ForeignKey(default=None, max_length=10, on_delete=django.db.models.deletion.CASCADE, related_name='asset_price_relation', to='assets.asset'),
        ),
        migrations.AlterField(
            model_name='asset_pricing',
            name='market_value',
            field=models.FloatField(verbose_name='Market Value'),
        ),
        migrations.AlterUniqueTogether(
            name='asset_pricing',
            unique_together={('ticker', 'timestamp1')},
        ),
        migrations.RemoveField(
            model_name='asset_pricing',
            name='market_traded',
        ),
        migrations.RemoveField(
            model_name='asset_pricing',
            name='ticket',
        ),
    ]
