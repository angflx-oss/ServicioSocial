# Generated by Django 4.0 on 2022-01-12 07:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ServicioSocialApp', '0011_rename_departamento_departamento_dependencia'),
    ]

    operations = [
        migrations.CreateModel(
            name='Proyecto',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=250)),
                ('numerodeproyecto', models.CharField(max_length=250)),
                ('ciclo', models.CharField(max_length=250)),
                ('departamento', models.CharField(max_length=250)),
                ('dependencia', models.CharField(max_length=250)),
                ('unidadreceptora', models.CharField(max_length=250)),
                ('status', models.CharField(max_length=250)),
            ],
        ),
    ]