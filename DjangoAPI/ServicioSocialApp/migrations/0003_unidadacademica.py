# Generated by Django 4.0 on 2022-01-07 10:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ServicioSocialApp', '0002_unidadregional_delete_unidadesacademicas_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='UnidadAcademica',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=250)),
                ('unidadregional', models.CharField(max_length=250)),
            ],
        ),
    ]