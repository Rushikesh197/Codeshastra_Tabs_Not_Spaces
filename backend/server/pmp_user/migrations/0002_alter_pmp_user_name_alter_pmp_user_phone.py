# Generated by Django 4.2.5 on 2024-03-09 18:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pmp_user', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pmp_user',
            name='name',
            field=models.CharField(null=True, verbose_name='Enter Name'),
        ),
        migrations.AlterField(
            model_name='pmp_user',
            name='phone',
            field=models.BigIntegerField(null=True, verbose_name='Enter Phone Number'),
        ),
    ]
