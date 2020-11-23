# Generated by Django 3.1.3 on 2020-11-23 14:29

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='FindSitter',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('location', models.CharField(max_length=255)),
                ('payment_type', models.CharField(choices=[('M', 'Monthly'), ('W', 'Weekly'), ('D', 'Dailly')], max_length=1)),
                ('kids_ages', models.CharField(max_length=255)),
                ('pay_per_hour', models.IntegerField()),
                ('work_time_per_day', models.IntegerField()),
                ('work_weeks', models.CharField(max_length=255)),
                ('work_start_time', models.IntegerField()),
                ('work_end_time', models.IntegerField()),
                ('work_start_date', models.DateField()),
                ('work_type', models.CharField(max_length=255)),
                ('cctv_yn', models.IntegerField()),
                ('required_security_level', models.IntegerField()),
                ('required_conditions', models.TextField(blank=True)),
                ('contents', models.TextField()),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('authorId', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('liked_level', models.IntegerField()),
                ('comments', models.TextField()),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('jobid', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='sitterJobs.findsitter')),
                ('userId', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Message',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('comments', models.TextField()),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('jobid', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='sitterJobs.findsitter')),
                ('userId', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
